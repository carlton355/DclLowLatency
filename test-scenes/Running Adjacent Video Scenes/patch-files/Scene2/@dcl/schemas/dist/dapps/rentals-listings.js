"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalListingCreation = exports.PeriodCreation = exports.RentalsListingsSortBy = exports.RentalsListingsFilterByCategory = exports.RentalsListingSortDirection = exports.RentalStatus = void 0;
const validation_1 = require("../validation");
const chain_id_1 = require("./chain-id");
const network_1 = require("./network");
/**
 * All the possible rental statuses.
 * (This will be merged into ListingStatus eventually)
 */
var RentalStatus;
(function (RentalStatus) {
    RentalStatus["OPEN"] = "open";
    RentalStatus["CANCELLED"] = "cancelled";
    RentalStatus["EXECUTED"] = "executed";
    RentalStatus["CLAIMED"] = "claimed";
})(RentalStatus = exports.RentalStatus || (exports.RentalStatus = {}));
/**
 * All the possible sort directions.
 */
var RentalsListingSortDirection;
(function (RentalsListingSortDirection) {
    RentalsListingSortDirection["ASC"] = "asc";
    RentalsListingSortDirection["DESC"] = "desc";
})(RentalsListingSortDirection = exports.RentalsListingSortDirection || (exports.RentalsListingSortDirection = {}));
/**
 * All the possible NFT categories of a rental listing.
 */
var RentalsListingsFilterByCategory;
(function (RentalsListingsFilterByCategory) {
    RentalsListingsFilterByCategory["PARCEL"] = "parcel";
    RentalsListingsFilterByCategory["ESTATE"] = "estate";
})(RentalsListingsFilterByCategory = exports.RentalsListingsFilterByCategory || (exports.RentalsListingsFilterByCategory = {}));
/**
 * All the possible parameters that a rental listing can be sorted by.
 */
var RentalsListingsSortBy;
(function (RentalsListingsSortBy) {
    /** Order by created at of the listing's metadata */
    RentalsListingsSortBy["LAND_CREATION_DATE"] = "land_creation_date";
    /** Order by created at of the listing */
    RentalsListingsSortBy["RENTAL_LISTING_DATE"] = "rental_listing_date";
    /** Order by rented at of the listing */
    RentalsListingsSortBy["RENTAL_DATE"] = "rented_date";
    /** Order by search text of the listing's metadata */
    RentalsListingsSortBy["NAME"] = "name";
    /** Order by maximum rental price per day of the listing */
    RentalsListingsSortBy["MAX_RENTAL_PRICE"] = "max_rental_price";
    /** Order by minimum rental price per day of the listing */
    RentalsListingsSortBy["MIN_RENTAL_PRICE"] = "min_rental_price";
})(RentalsListingsSortBy = exports.RentalsListingsSortBy || (exports.RentalsListingsSortBy = {}));
var PeriodCreation;
(function (PeriodCreation) {
    PeriodCreation.schema = {
        type: 'object',
        properties: {
            minDays: { type: 'integer', minimum: 0, maximum: 2147483647 },
            maxDays: { type: 'integer', minimum: 0, maximum: 2147483647 },
            pricePerDay: { type: 'string', pattern: '^[0-9]+$' }
        },
        additionalProperties: false,
        required: ['minDays', 'maxDays', 'pricePerDay']
    };
    PeriodCreation.validate = (0, validation_1.generateLazyValidator)(PeriodCreation.schema);
})(PeriodCreation = exports.PeriodCreation || (exports.PeriodCreation = {}));
var RentalListingCreation;
(function (RentalListingCreation) {
    RentalListingCreation.schema = {
        type: 'object',
        properties: {
            network: network_1.Network.schema,
            chainId: chain_id_1.ChainId.schema,
            expiration: { type: 'number', minimum: 0 },
            signature: { type: 'string', minLength: 1 },
            tokenId: { type: 'string', minLength: 1 },
            nonces: {
                type: 'array',
                minItems: 3,
                maxItems: 3,
                items: {
                    minLength: 1,
                    type: 'string',
                    pattern: '^[0-9]+$'
                }
            },
            contractAddress: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' },
            rentalContractAddress: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' },
            periods: {
                type: 'array',
                minItems: 1,
                maxItems: 100,
                uniqueItems: true,
                items: PeriodCreation.schema
            },
            target: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' }
        },
        additionalProperties: false,
        required: [
            'network',
            'chainId',
            'expiration',
            'signature',
            'nonces',
            'tokenId',
            'contractAddress',
            'rentalContractAddress',
            'periods',
            'target'
        ]
    };
    RentalListingCreation.validate = (0, validation_1.generateLazyValidator)(RentalListingCreation.schema);
})(RentalListingCreation = exports.RentalListingCreation || (exports.RentalListingCreation = {}));
//# sourceMappingURL=rentals-listings.js.map