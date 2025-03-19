import { z } from "zod";
import type { CompanyEmailOptions } from "./types";
export declare const companyEmail: ({ expiresIn, disableCleanup, allowedEmails, generateToken, storeCookieAfterVerification, sendEmailVerification, }?: CompanyEmailOptions) => {
    id: "company-email";
    endpoints: {
        sendEmailVerification: {
            <C extends [{
                [x: string]: any;
                body: {
                    email: string;
                    callbackUrl?: string | undefined;
                };
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: import("better-call").Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    success: boolean;
                };
            } : {
                success: boolean;
            }>;
            options: {
                method: "POST";
                metadata: {
                    [key: string]: any;
                    openapi?: {
                        summary?: string;
                        description?: string;
                        tags?: string[];
                        operationId?: string;
                        parameters?: import("better-call").OpenAPIParameter[];
                        requestBody?: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type?: import("better-call").OpenAPISchemaType;
                                        properties?: Record<string, any>;
                                        required?: string[];
                                        $ref?: string;
                                    };
                                };
                            };
                        };
                        responses?: {
                            [status: string]: {
                                description: string;
                                content?: {
                                    "application/json"?: {
                                        schema: {
                                            type?: import("better-call").OpenAPISchemaType;
                                            properties?: Record<string, any>;
                                            required?: string[];
                                            $ref?: string;
                                        };
                                    };
                                    "text/plain"?: {
                                        schema?: {
                                            type?: import("better-call").OpenAPISchemaType;
                                            properties?: Record<string, any>;
                                            required?: string[];
                                            $ref?: string;
                                        };
                                    };
                                    "text/html"?: {
                                        schema?: {
                                            type?: import("better-call").OpenAPISchemaType;
                                            properties?: Record<string, any>;
                                            required?: string[];
                                            $ref?: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    $Infer?: {
                        body?: any;
                        query?: Record<string, any>;
                    };
                    SERVER_ONLY?: boolean;
                } | undefined;
                body: z.ZodObject<{
                    email: z.ZodString;
                    callbackUrl: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    email: string;
                    callbackUrl?: string | undefined;
                }, {
                    email: string;
                    callbackUrl?: string | undefined;
                }>;
            } & {
                use: any[];
            };
            path: "/company-email/send-verification-email";
        };
        verifyEmailVerification: {
            <C extends [{
                [x: string]: any;
                query: {
                    token: string;
                    redirectTo?: string | undefined;
                };
                body?: undefined;
                method?: "GET" | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: import("better-call").Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    success: boolean;
                };
            } : {
                success: boolean;
            }>;
            options: {
                method: "GET";
                metadata: {
                    [key: string]: any;
                    openapi?: {
                        summary?: string;
                        description?: string;
                        tags?: string[];
                        operationId?: string;
                        parameters?: import("better-call").OpenAPIParameter[];
                        requestBody?: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type?: import("better-call").OpenAPISchemaType;
                                        properties?: Record<string, any>;
                                        required?: string[];
                                        $ref?: string;
                                    };
                                };
                            };
                        };
                        responses?: {
                            [status: string]: {
                                description: string;
                                content?: {
                                    "application/json"?: {
                                        schema: {
                                            type?: import("better-call").OpenAPISchemaType;
                                            properties?: Record<string, any>;
                                            required?: string[];
                                            $ref?: string;
                                        };
                                    };
                                    "text/plain"?: {
                                        schema?: {
                                            type?: import("better-call").OpenAPISchemaType;
                                            properties?: Record<string, any>;
                                            required?: string[];
                                            $ref?: string;
                                        };
                                    };
                                    "text/html"?: {
                                        schema?: {
                                            type?: import("better-call").OpenAPISchemaType;
                                            properties?: Record<string, any>;
                                            required?: string[];
                                            $ref?: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    $Infer?: {
                        body?: any;
                        query?: Record<string, any>;
                    };
                    SERVER_ONLY?: boolean;
                } | undefined;
                query: z.ZodObject<{
                    token: z.ZodString;
                    redirectTo: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    token: string;
                    redirectTo?: string | undefined;
                }, {
                    token: string;
                    redirectTo?: string | undefined;
                }>;
            } & {
                use: any[];
            };
            path: "/company-email/verify-email";
        };
        checkCompanyEmail: {
            <C extends [{
                [x: string]: any;
                body?: undefined;
                method?: "POST" | undefined;
                query?: Record<string, any> | undefined;
                params?: Record<string, any> | undefined;
                request?: Request | undefined;
                asResponse?: boolean | undefined;
                returnHeaders?: boolean | undefined;
                use?: import("better-call").Middleware[] | undefined;
                path?: string | undefined;
            }]>(...inputCtx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : C extends [{
                returnHeaders: true;
            }] ? {
                headers: Headers;
                response: {
                    success: boolean;
                };
            } : {
                success: boolean;
            }>;
            options: {
                method: "POST";
                metadata: {
                    [key: string]: any;
                    openapi?: {
                        summary?: string;
                        description?: string;
                        tags?: string[];
                        operationId?: string;
                        parameters?: import("better-call").OpenAPIParameter[];
                        requestBody?: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type?: import("better-call").OpenAPISchemaType;
                                        properties?: Record<string, any>;
                                        required?: string[];
                                        $ref?: string;
                                    };
                                };
                            };
                        };
                        responses?: {
                            [status: string]: {
                                description: string;
                                content?: {
                                    "application/json"?: {
                                        schema: {
                                            type?: import("better-call").OpenAPISchemaType;
                                            properties?: Record<string, any>;
                                            required?: string[];
                                            $ref?: string;
                                        };
                                    };
                                    "text/plain"?: {
                                        schema?: {
                                            type?: import("better-call").OpenAPISchemaType;
                                            properties?: Record<string, any>;
                                            required?: string[];
                                            $ref?: string;
                                        };
                                    };
                                    "text/html"?: {
                                        schema?: {
                                            type?: import("better-call").OpenAPISchemaType;
                                            properties?: Record<string, any>;
                                            required?: string[];
                                            $ref?: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    $Infer?: {
                        body?: any;
                        query?: Record<string, any>;
                    };
                    SERVER_ONLY?: boolean;
                } | undefined;
            } & {
                use: any[];
            };
            path: "/company-email/check";
        };
    };
};
