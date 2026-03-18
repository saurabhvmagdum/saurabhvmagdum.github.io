/**
 * Browser-compatible Markdown parser with YAML frontmatter support
 * Replaces gray-matter to avoid Node.js Buffer dependency
 */

/**
 * Parses YAML frontmatter from markdown content
 * @param {string} content - Raw markdown file content
 * @returns {Object} { data: object, content: string }
 */
const parseFrontmatter = (content) => {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n?/;
    const match = content.match(frontmatterRegex);

    if (!match) {
        return { data: {}, content };
    }

    const yamlString = match[1];
    const markdownContent = content.slice(match[0].length);

    try {
        const data = parseYaml(yamlString);
        return { data, content: markdownContent };
    } catch (error) {
        console.error('Error parsing YAML frontmatter:', error);
        return { data: {}, content };
    }
};

/**
 * Simple YAML parser for the portfolio data structure
 * Handles nested objects, arrays, and basic types
 * @param {string} yaml - YAML string to parse
 * @returns {Object} Parsed JavaScript object
 */
const parseYaml = (yaml) => {
    const result = {};
    const lines = yaml.split('\n');
    const stack = [{ indent: -1, obj: result, key: null }];

    let currentArray = null;
    let currentArrayIndent = -1;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Skip empty lines and comments
        if (!line.trim() || line.trim().startsWith('#')) {
            continue;
        }

        // Calculate indentation
        const indent = line.search(/\S/);
        const trimmedLine = line.trim();

        // Handle array items
        if (trimmedLine.startsWith('- ')) {
            const value = trimmedLine.slice(2).trim();

            // Check if it's a key-value pair inside array
            if (value.includes(':')) {
                const colonIndex = value.indexOf(':');
                const itemKey = value.slice(0, colonIndex).trim();
                const itemValue = value.slice(colonIndex + 1).trim();

                if (currentArray) {
                    const arrayItem = { [itemKey]: parseValue(itemValue) };

                    // Look ahead for more properties in this array item
                    let j = i + 1;
                    while (j < lines.length) {
                        const nextLine = lines[j];
                        if (!nextLine.trim() || nextLine.trim().startsWith('#')) {
                            j++;
                            continue;
                        }
                        const nextIndent = nextLine.search(/\S/);
                        const nextTrimmed = nextLine.trim();

                        // If we're still in the same array item (indented more than the dash)
                        if (nextIndent > indent && !nextTrimmed.startsWith('- ')) {
                            if (nextTrimmed.includes(':')) {
                                const [subKey, ...subValueParts] = nextTrimmed.split(':');
                                const subValue = subValueParts.join(':').trim();
                                arrayItem[subKey.trim()] = parseValue(subValue);
                                i = j;
                                j++;
                            } else {
                                break;
                            }
                        } else {
                            break;
                        }
                    }

                    currentArray.push(arrayItem);
                }
            } else {
                // Simple array value
                if (currentArray) {
                    currentArray.push(parseValue(value));
                }
            }
            continue;
        }

        // Handle key-value pairs
        if (trimmedLine.includes(':')) {
            const colonIndex = trimmedLine.indexOf(':');
            const key = trimmedLine.slice(0, colonIndex).trim();
            const value = trimmedLine.slice(colonIndex + 1).trim();

            // Pop stack to find correct parent
            while (stack.length > 1 && stack[stack.length - 1].indent >= indent) {
                stack.pop();
            }

            const parent = stack[stack.length - 1].obj;

            if (value === '' || value === null) {
                // Check next line to determine if it's an array or object
                const nextLine = lines[i + 1];
                if (nextLine && nextLine.trim().startsWith('- ')) {
                    parent[key] = [];
                    currentArray = parent[key];
                    currentArrayIndent = indent;
                } else if (nextLine && nextLine.search(/\S/) > indent) {
                    parent[key] = {};
                    stack.push({ indent, obj: parent[key], key });
                } else {
                    parent[key] = null;
                }
            } else {
                parent[key] = parseValue(value);
                currentArray = null;
            }
        }
    }

    return result;
};

/**
 * Parse a YAML value to appropriate JavaScript type
 * @param {string} value - String value to parse
 * @returns {*} Parsed value
 */
const parseValue = (value) => {
    if (!value || value === '' || value === 'null' || value === '~') {
        return null;
    }

    // Boolean
    if (value === 'true') return true;
    if (value === 'false') return false;

    // Number
    if (/^-?\d+$/.test(value)) {
        return parseInt(value, 10);
    }
    if (/^-?\d+\.\d+$/.test(value)) {
        return parseFloat(value);
    }

    // Quoted string
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
        return value.slice(1, -1);
    }

    // Inline array [item1, item2]
    if (value.startsWith('[') && value.endsWith(']')) {
        const inner = value.slice(1, -1).trim();
        if (!inner) return [];
        return inner.split(',').map(item => parseValue(item.trim()));
    }

    return value;
};

/**
 * Parses the info.md file content and extracts frontmatter data
 * @param {string} content - Raw markdown file content
 * @returns {Object} Parsed portfolio data
 */
export const parseInfoMarkdown = (content) => {
    try {
        const { data } = parseFrontmatter(content);
        return {
            success: true,
            data: transformData(data)
        };
    } catch (error) {
        console.error('Error parsing markdown:', error);
        return {
            success: false,
            error: error.message,
            data: null
        };
    }
};

/**
 * Transforms parsed YAML data into component-friendly format
 * @param {Object} data - Raw parsed YAML data
 * @returns {Object} Transformed data structure
 */
const transformData = (data) => {
    return {
        // Personal Info
        personal: {
            name: data.name || '',
            title: data.title || '',
            subtitle: data.subtitle || '',
            location: data.location || '',
            email: data.email || '',
            phone: data.phone || '',
            profileImage: data.profileImage || '',
            resumeLink: data.resumeLink || '',
        },

        // Hero Section
        hero: {
            title: data.heroTitle || '',
            highlight: data.heroHighlight || '',
            description: data.heroDescription || '',
        },

        // Social Links
        socials: data.socials || {},

        // About Section
        about: {
            paragraphs: data.about?.paragraphs || [],
            highlights: data.about?.highlights || [],
        },

        // Skills Section
        skills: (data.skills || []).map(category => ({
            category: category.category,
            icon: category.icon,
            items: (category.items || []).map(skill => ({
                name: skill.name,
                icon: skill.icon,
                level: skill.level || 0,
            })),
        })),

        // Experience Section
        experience: (data.experience || []).map(exp => ({
            role: exp.role,
            company: exp.company,
            companyUrl: exp.companyUrl || '',
            location: exp.location || '',
            duration: exp.duration,
            type: exp.type || 'Full-time',
            description: exp.description || '',
            responsibilities: exp.responsibilities || [],
            technologies: exp.technologies || [],
        })),

        // Projects Section
        projects: (data.projects || []).map(project => ({
            title: project.title,
            description: project.description,
            longDescription: project.longDescription || '',
            image: project.image || '',
            technologies: project.technologies || [],
            github: project.github || '',
            demo: project.demo || '',
            featured: project.featured || false,
            category: project.category || 'Other',
        })),

        // Certifications
        certifications: data.certifications || [],

        // Education
        education: data.education || [],

        // Meta Information
        meta: {
            themeColor: data.meta?.themeColor || '#38bdf8',
            description: data.meta?.description || '',
            keywords: data.meta?.keywords || [],
            ogImage: data.meta?.ogImage || '',
        },
    };
};

/**
 * Fetches and parses the info.md file
 * @returns {Promise<Object>} Parsed portfolio data
 */
export const fetchPortfolioData = async () => {
    try {
        const response = await fetch('/info.md');
        if (!response.ok) {
            throw new Error(`Failed to fetch info.md: ${response.status}`);
        }
        const content = await response.text();
        return parseInfoMarkdown(content);
    } catch (error) {
        console.error('Error fetching portfolio data:', error);
        return {
            success: false,
            error: error.message,
            data: null
        };
    }
};

/**
 * Converts markdown text to HTML (simple implementation)
 * @param {string} text - Markdown text
 * @returns {string} HTML string
 */
export const markdownToHtml = (text) => {
    if (!text) return '';

    return text
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Links
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
        // Code
        .replace(/`(.*?)`/g, '<code>$1</code>');
};
