import { JSONSchema, ValidateFunction } from '../validation';
import { AuthChain } from './auth-chain';
/**
 * @public
 */
export declare type DeploymentToSqs = {
    entity: {
        entityId: string;
        authChain: AuthChain;
    };
    contentServerUrls?: string[];
};
/**
 * @public
 */
export declare namespace DeploymentToSqs {
    const schema: JSONSchema<DeploymentToSqs>;
    const validate: ValidateFunction<DeploymentToSqs>;
}
//# sourceMappingURL=deployments-to-sqs.d.ts.map