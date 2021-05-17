import {EndpointRepresentation, EndpointRepresentationParams} from "./endpoints"
import {Orientation} from "../factory/anchor-record-factory"
import {Endpoint} from "./endpoint"
import {AnchorPlacement} from "../router/router"
import {EndpointHandler} from "../factory/endpoint-factory"

export type ComputedBlankEndpoint = [ number, number, number, number  ]

export interface BlankEndpointParams extends EndpointRepresentationParams {}

export class BlankEndpoint extends EndpointRepresentation<ComputedBlankEndpoint> {

    constructor(endpoint:Endpoint, params?:BlankEndpointParams) {
        super(endpoint, params)
     }

    static type = "Blank"
    type = BlankEndpoint.type
}

export const BlankEndpointHandler:EndpointHandler<BlankEndpoint, ComputedBlankEndpoint> = {

    type:BlankEndpoint.type,

    cls:BlankEndpoint,

    compute:(ep:BlankEndpoint, anchorPoint:AnchorPlacement, orientation:Orientation, endpointStyle:any):ComputedBlankEndpoint => {
        ep.x = anchorPoint.curX
        ep.y = anchorPoint.curY
        ep.w = 10
        ep.h = 0
        return [anchorPoint.curX, anchorPoint.curY, 10, 0]
    },

    getParams:(ep:BlankEndpoint): Record<string, any> => {
        return { }
    }
}




