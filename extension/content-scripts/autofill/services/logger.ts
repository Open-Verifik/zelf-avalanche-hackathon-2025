/**
 * ZelfKey Logger - Simple Content Script Logger
 *
 * Lightweight logging system with namespacing for browser extension content scripts.
 *
 * Usage:
 * - logger.error("Something went wrong", error)
 * - logger.warn("Warning message")
 * - logger.info("Information message")
 * - logger.debug("Debug information")
 *
 * All messages are prefixed with [ZELF_KEYS] for easy identification.
 * Debug messages are only shown when explicitly enabled.
 */

export enum LogLevel {
    ERROR = 0,
    WARN = 1,
    INFO = 2,
    DEBUG = 3,
}

class Logger {
    private static instance: Logger;
    private logLevel: LogLevel = LogLevel.INFO;
    private debugEnabled: boolean = false;

    private constructor() {
        this.checkDebugMode();
    }

    private checkDebugMode(): void {
        if (typeof window !== "undefined" && window.location.hash.includes("zelfkeys-debug")) {
            this.debugEnabled = true;
            this.logLevel = LogLevel.DEBUG;

            return;
        }

        if (typeof localStorage !== "undefined") {
            try {
                const debugFlag = localStorage.getItem("zelfkeys-debug");

                if (debugFlag !== "true") return;

                this.debugEnabled = true;
                this.logLevel = LogLevel.DEBUG;
            } catch (e) {}
        }

        this.logLevel = LogLevel.WARN;
    }

    public static getInstance(): Logger {
        if (!Logger.instance) Logger.instance = new Logger();

        return Logger.instance;
    }

    public setLogLevel(level: LogLevel): void {
        this.logLevel = level;
    }

    public getLogLevel(): LogLevel {
        return this.logLevel;
    }

    public enableDebug(): void {
        this.debugEnabled = true;
        this.logLevel = LogLevel.DEBUG;
    }

    public disableDebug(): void {
        this.debugEnabled = false;
        this.logLevel = LogLevel.WARN;
    }

    private shouldLog(level: LogLevel): boolean {
        return level <= this.logLevel;
    }

    private formatMessage(level: string, message: string, ...args: any[]): [string, ...any[]] {
        const timestamp = new Date().toISOString().substring(11, 23); // HH:MM:SS.mmm
        const prefix = `[ZELF_KEYS] [${timestamp}] [${level}]`;
        return [`${prefix} ${message}`, ...args];
    }

    public error(message: string, ...args: any[]): void {
        if (this.shouldLog(LogLevel.ERROR)) {
            const [formattedMessage, ...formattedArgs] = this.formatMessage("ERROR", message, ...args);
            console.error(formattedMessage, ...formattedArgs);
        }
    }

    public warn(message: string, ...args: any[]): void {
        if (this.shouldLog(LogLevel.WARN)) {
            const [formattedMessage, ...formattedArgs] = this.formatMessage("WARN", message, ...args);
            console.warn(formattedMessage, ...formattedArgs);
        }
    }

    public info(message: string, ...args: any[]): void {
        if (this.shouldLog(LogLevel.INFO)) {
            const [formattedMessage, ...formattedArgs] = this.formatMessage("INFO", message, ...args);
            console.log(formattedMessage, ...formattedArgs);
        }
    }

    public debug(message: string, ...args: any[]): void {
        if (this.shouldLog(LogLevel.DEBUG)) {
            const [formattedMessage, ...formattedArgs] = this.formatMessage("DEBUG", message, ...args);
            console.log(formattedMessage, ...formattedArgs);
        }
    }

    public log(message: string, ...args: any[]): void {
        this.info(message, ...args);
    }

    // Convenience methods for common use cases
    public logError(error: Error, context?: string): void {
        this.error(`${context ? `[${context}] ` : ""}${error.message}`, error.stack);
    }

    public logPerformance(operation: string, startTime: number): void {
        const duration = performance.now() - startTime;
        this.debug(`Performance: ${operation} took ${duration.toFixed(2)}ms`);
    }

    public logFormDetection(forms: number, fields: number): void {
        this.debug(`Form detection: Found ${forms} forms with ${fields} total fields`);
    }

    public logIconPositioning(element: HTMLElement, position: { top: number; left: number }): void {
        this.debug(`Icon positioning: ${element.tagName}#${element.id || "no-id"} at (${position.left}, ${position.top})`);
    }

    // Method to set log level from external sources (e.g., extension settings)
    public setLogLevelFromString(level: string): void {
        switch (level.toLowerCase()) {
            case "error":
                this.setLogLevel(LogLevel.ERROR);
                break;
            case "warn":
                this.setLogLevel(LogLevel.WARN);
                break;
            case "info":
                this.setLogLevel(LogLevel.INFO);
                break;
            case "debug":
                this.setLogLevel(LogLevel.DEBUG);
                break;
            default:
                this.warn(`Unknown log level: ${level}, using INFO`);
                this.setLogLevel(LogLevel.INFO);
        }
    }

    // Method to check if debug is enabled
    public isDebugEnabled(): boolean {
        return this.debugEnabled;
    }

    // Method to get simple environment info
    public getEnvironmentInfo(): object {
        return {
            logLevel: this.logLevel,
            debugEnabled: this.debugEnabled,
            hostname: typeof window !== "undefined" ? window.location.hostname : "unknown",
        };
    }
}

// Export singleton instance
export const logger = Logger.getInstance();

// Export convenience functions
export const logError = (error: Error, context?: string) => logger.logError(error, context);
export const logPerformance = (operation: string, startTime: number) => logger.logPerformance(operation, startTime);
export const logFormDetection = (forms: number, fields: number) => logger.logFormDetection(forms, fields);
export const logIconPositioning = (element: HTMLElement, position: { top: number; left: number }) => logger.logIconPositioning(element, position);
