export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string
}

export interface BuildMOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean
}