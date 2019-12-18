// Type definitions for index.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// Cache.!ret
type Ret = ((target : any, name : any, propertyDesciptor : Cache.Ret2) => /*!2*/ any);
declare namespace Cache{
	// Cache.!ret.!2
	
	/**
	 * 
	 */
	interface Ret2 {
	}
}
// ClearCache.!ret
type Ret = ((target : any, name : any, propertyDesciptor : ClearCache.Ret2) => /*!2*/ any);
declare namespace ClearCache{
	// ClearCache.!ret.!2
	
	/**
	 * 
	 */
	interface Ret2 {
	}
}

/**
 * 
 */
export declare var REDIS_PRE : string;

/**
 * 
 */
declare interface Cache {
		
	/**
	 * 
	 * @param config 
	 * @return  
	 */
	new (config : any): Ret;
}


/**
 * 
 */
declare interface ClearCache {
		
	/**
	 * 
	 * @return  
	 */
	new (): Ret;
}


/**
 * 
 */
declare namespace index.js{
	
	/**
	 * 
	 */
	interface Promise {
				
		/**
		 * 
		 */
		:t : Promise;
	}
}
