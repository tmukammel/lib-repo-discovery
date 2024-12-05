/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, expect, test, beforeAll } from '@jest/globals';
import { RepositoryDiscovery } from '../src/repository-discovery';
import { IRepositoryInvoker } from '../src/types/repository-invoker.interface';

class TestInvoker implements IRepositoryInvoker {
	get<Q, M>(query: Q, isCollection?: boolean): M | M[] {
		throw new Error('Method not implemented.');
	}
	validate<Q, D>(query: Q, validationLogic: (data: D) => boolean): Promise<boolean> {
		throw new Error('Method not implemented.');
	}
	transact<Q, T, D>(method: string, query: Q, transaction: T, data?: D): D {
		throw new Error('Method not implemented.');
	}
}

let repoDiscovery: RepositoryDiscovery;
let invoker: TestInvoker;

beforeAll(() => {
	repoDiscovery = RepositoryDiscovery.instance;
	invoker = new TestInvoker();
});

describe('lib repository discovery', () => {
	test('creats a singleton instance', () => {
		const anotherReference: RepositoryDiscovery = RepositoryDiscovery.instance;
		expect(repoDiscovery).toBe(anotherReference);
	});

	test('can add repository invoker to the registry', () => {
		expect(repoDiscovery.addToRepositoryInvokerRegistry('test-invoker', invoker)).toBeTruthy();
	});

	test('cannot add repository invoker again to the registry', () => {
		expect(repoDiscovery.addToRepositoryInvokerRegistry('test-invoker', invoker)).toBeFalsy();
	});

	test('can get repository invoker from registry', () => {
		expect(repoDiscovery.getRepositoryInvoker('test-invoker')).toBeTruthy();
	});

	test('can get undefined from registry when invoker is not registered', () => {
		expect(repoDiscovery.getRepositoryInvoker('another-invoker')).toBeUndefined();
	});
});
