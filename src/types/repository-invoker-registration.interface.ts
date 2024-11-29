import { IRepositoryInvoker } from './repository-invoker.interface';

/**
 * Repository registration interface
 */
export interface IRepositoryInvokerRegistration {
	addToRepositoryInvokerRegistry(key: string, repoInvocator: IRepositoryInvoker): boolean;
}
