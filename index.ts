/**
 *
 * ❌ delegate responsibility to the app to define
 * ❌ and this lib will call this method on bootup like delegate.addServiceResourcesToIRCResPool()
 *
 * addRepositoryInvokersToRepositoryDiscoveryPool()
 * during bootstrap
 *
 * db = new db()
 * model = new ProductModel(db)
 * repo = new ProductRepo(model)
 * service: IRepositoryInvoker = new ProductService(repo)
 *
 * * addRepositoryInvokersToRepositoryDiscoveryPool() {
 *   repoDiscovery.addToRepositoryInvokerPool(service)
 * }
 */

export * from './src/repository-discovery';
export * from './src/types/repository-invoker.interface';
