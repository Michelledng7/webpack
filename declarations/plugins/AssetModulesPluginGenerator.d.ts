/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */

/**
 * Function that executes for module and should return an DataUrl string
 *
 * This interface was referenced by `AssetModulesPluginGeneratorOptions`'s JSON-Schema
 * via the `definition` "DataUrlFunction".
 */
export type DataUrlFunction = (
	source: string | Buffer,
	context: {filename: string; module: import("../../lib/Module")}
) => string;

export interface AssetModulesPluginGeneratorOptions {
	/**
	 * Override for output.assetModuleFilename
	 */
	assetFilename?: string;
	/**
	 * The options for data url generator
	 */
	dataUrl?: DataUrlOptions | DataUrlFunction;
}
/**
 * This interface was referenced by `AssetModulesPluginGeneratorOptions`'s JSON-Schema
 * via the `definition` "DataUrlOptions".
 */
export interface DataUrlOptions {
	/**
	 * Asset encoding (defaults to base64)
	 */
	encoding?: false | "base64";
	/**
	 * Asset mimetype (getting from file extension by default)
	 */
	mimetype?: string;
}
