export * from './lib/shared-data-access.module';
export * from './lib/api-call.service'

export interface SharedModuleConfig {
    useDefaultApi: boolean;
    apiUrl: string;
}
