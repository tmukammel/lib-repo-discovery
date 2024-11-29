import { IRepositoryInvoker } from './types/repository-invoker.interface';
import { IRepositoryInvokerRegistration } from './types/repository-invoker-registration.interface';

/**
 * Repository Discovery
 */
export class RepositoryDiscovery implements IRepositoryInvokerRegistration {
	private static _instance: RepositoryDiscovery;
	private registry: { [key: string]: IRepositoryInvoker };

	private constructor() {
		this.registry = {};
	}

	public static get instance(): RepositoryDiscovery {
		if (RepositoryDiscovery._instance == null) {
			RepositoryDiscovery._instance = new RepositoryDiscovery();
		}
		return RepositoryDiscovery._instance;
	}

	public getRepositoryInvoker(key: string): IRepositoryInvoker | undefined {
		const invoker: IRepositoryInvoker | undefined = this.registry[key] ?? undefined;
		return invoker;
	}

	/**
	 * Register repository invocator in RepositoryDiscovery
	 * @param key string Name of Resource to register for
	 * @param repoInvoker IRepositoryInvoker reference
	 * @returns boolean
	 */
	public addToRepositoryInvokerRegistry(key: string, repoInvoker: IRepositoryInvoker): boolean {
		if (Object.prototype.hasOwnProperty.call(this.registry, key)) return false;
		this.registry[key] = repoInvoker;
		return true;
	}
}
