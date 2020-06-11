import { EndpointOptions, EndpointSpec } from "../endpoint";
import { jsPlumbInstance, OffsetAndSize, Size } from "../core";
import { ComputedAnchorPosition } from "../factory/anchor-factory";
import { Anchor } from "../anchor/anchor";
import { OverlayCapableComponent } from "../component/overlay-capable-component";
import { Connection } from "../connector/connection-impl";
import { PaintStyle } from "../styles";
import { ConnectorSpec } from "../connector";
import { EndpointRepresentation } from "./endpoints";
import { OverlaySpec } from "..";
export declare class Endpoint extends OverlayCapableComponent {
    instance: jsPlumbInstance;
    getIdPrefix(): string;
    getTypeDescriptor(): string;
    getXY(): {
        x: number;
        y: number;
    };
    connections: Array<Connection>;
    connectorPointerEvents: string;
    anchor: Anchor;
    endpoint: EndpointRepresentation<any>;
    element: any;
    elementId: string;
    dragAllowedWhenFull: boolean;
    scope: string;
    timestamp: string;
    maxConnections: number;
    connectorClass: string;
    connectorHoverClass: string;
    _originalAnchor: any;
    deleteAfterDragStop: boolean;
    finalEndpoint: Endpoint;
    isSource: boolean;
    isTarget: boolean;
    isTemporarySource: boolean;
    connectionsDirected: boolean;
    connectionsDetachable: boolean;
    reattachConnections: boolean;
    referenceEndpoint: Endpoint;
    connectionType: string;
    connector: ConnectorSpec;
    connectorOverlays: Array<OverlaySpec>;
    connectorStyle: PaintStyle;
    connectorHoverStyle: PaintStyle;
    dragProxy: any;
    deleteOnEmpty: boolean;
    defaultLabelLocation: [number, number];
    getDefaultOverlayKey(): string;
    constructor(instance: jsPlumbInstance, params: EndpointOptions);
    private _updateAnchorClass;
    private prepareAnchor;
    setPreparedAnchor(anchor: Anchor, doNotRepaint?: boolean): Endpoint;
    setAnchor(anchorParams: any, doNotRepaint?: boolean): Endpoint;
    addConnection(conn: Connection): void;
    /**
     * Detaches this Endpoint from the given Connection.  If `deleteOnEmpty` is set to true and there are no
     * Connections after this one is detached, the Endpoint is deleted.
     * @param connection
     * @param idx
     */
    detachFromConnection(connection: Connection, idx?: number, transientDetach?: boolean): void;
    deleteEveryConnection(params?: any): void;
    detachFrom(targetEndpoint: Endpoint, fireEvent?: boolean, originalEvent?: Event): Endpoint;
    setVisible(v: boolean, doNotChangeConnections?: boolean, doNotNotifyOtherEndpoint?: boolean): void;
    applyType(t: any, doNotRepaint: boolean, typeMap: any): void;
    isEnabled(): boolean;
    setEnabled(e: boolean): void;
    destroy(force?: boolean): void;
    isFull(): boolean;
    isFloating(): boolean;
    isConnectedTo(endpoint: Endpoint): boolean;
    getConnectionCost(): number;
    setConnectionCost(c: number): void;
    areConnectionsDirected(): boolean;
    setConnectionsDirected(b: boolean): void;
    setElementId(_elId: string): void;
    setReferenceElement(_el: any): void;
    setDragAllowedWhenFull(allowed: boolean): void;
    equals(endpoint: Endpoint): boolean;
    getUuid(): string;
    computeAnchor(params: any): [number, number, number, number];
    setElement(el: any): Endpoint;
    connectorSelector(): Connection;
    paint(params: {
        timestamp?: string;
        offset?: OffsetAndSize;
        dimensions?: Size;
        recalc?: boolean;
        elementWithPrecedence?: string;
        connectorPaintStyle?: PaintStyle;
        anchorLoc?: ComputedAnchorPosition;
    }): void;
    prepareEndpoint<C>(ep: EndpointSpec, typeId?: string): EndpointRepresentation<C>;
    setEndpoint(ep: EndpointSpec): void;
    setPreparedEndpoint<C>(ep: EndpointRepresentation<C>): void;
    addClass(clazz: string, dontUpdateOverlays?: boolean): void;
    removeClass(clazz: string, dontUpdateOverlays?: boolean): void;
}