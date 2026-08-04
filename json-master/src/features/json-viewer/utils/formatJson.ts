export const formatJson = (value: string): string => {
    const parsed = JSON.parse(value);

    return JSON.stringify(parsed, null, 2);
};