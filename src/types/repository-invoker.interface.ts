/**
 * Common repository interface for foreign entities
 *
 * Because it is unwarthy to allow storage modification operations without a transaction
 * we have specific apis for to get and validate
 * otherwise we have to go through a transaction to do any modification operation
 */
export interface IRepositoryInvoker {
	/**
	 * To get a single or a collection of specified model (M) from any package / service
	 * @template T the type of the query
	 * @template M the type of return model
	 * @param {T} query
	 * @param isCollection specifies if the query is to return more than one model (M)
	 * @returns {M} a single model or an array of models of type M
	 */
	get<Q, M>(query: Q, isCollection?: boolean): M | M[];

	/**
	 * To validate if some specific conditions are met on a specific model
	 * stored in the persistance storage
	 * @template Q the type of the query
	 * @template D the type of the data in validationLogic method argument
	 * @param query
	 * @param validationLogic
	 * @returns {boolean} asynchronously, validation resut as a boolean
	 */
	validate<Q, D>(query: Q, validationLogic: (data: D) => boolean): Promise<boolean>;

	/**
	 * To transactionally modify the persistence storage
	 * @template Q the type of the query
	 * @template T the type of the transaction (probably specific to the ORM)
	 * @template D the type of the data
	 * @param method
	 * @param query
	 * @param transaction
	 * @param data
	 * @returns {D} data of type D
	 */
	transact<Q, T, D>(method: string, query: Q, transaction: T, data?: D): D;
}
