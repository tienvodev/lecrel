// Utility type to extract the value types of a constant object
export type ExtractValueTypes<T extends Record<string, string>> = T[keyof T];

// Utility type to extract the key types of a constant object
export type ExtractKeyTypes<T extends Record<string, string>> = keyof T;
