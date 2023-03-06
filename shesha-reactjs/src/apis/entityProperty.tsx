/* Generated by restful-react */

import React from 'react';
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react';

import * as RestfulShesha from '../utils/fetchers';
export const SPEC_VERSION = 'v1';
export interface AjaxResponseBase {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
}

/**
 * Entity property DTO
 */
export interface EntityPropertyDto {
  id?: string;
  /**
   * Entity Config Name
   */
  entityConfigName?: string | null;
  /**
   * Property Name
   */
  name?: string | null;
  /**
   * Label (display name)
   */
  label?: string | null;
  /**
   * Description
   */
  description?: string | null;
  /**
   * Data type
   */
  dataType?: string | null;
  /**
   * Data format
   */
  dataFormat?: string | null;
  /**
   * Entity type. Aplicable for entity references
   */
  entityType?: string | null;
  /**
   * Reference list name
   */
  referenceListName?: string | null;
  /**
   * Reference list namespace
   */
  referenceListNamespace?: string | null;
  source?: MetadataSourceType;
  /**
   * Child properties, applicable for complex data types (e.g. object, array)
   */
  properties?: EntityPropertyDto[] | null;
  itemsType?: EntityPropertyDto;
  /**
   * If true, the property is not returned from Get end-points and is ignored if submitted on Create/Update end-points
   * The property should also not be listed on the form configurator property list
   */
  suppress?: boolean;
  /**
   * Indicates if a property value is required in order to save
   */
  required?: boolean;
  /**
   * If true, the property cannot be edited via the dynamically generated create/update end-points:
   * - property should not be listed on create/update end-points
   * - should be set to 'True' and not editable for read-only properties of domain classes
   */
  readOnly?: boolean;
  /**
   * Equivalent to Audited attribute on the property
   */
  audited?: boolean;
  /**
   * Validation min
   */
  min?: number | null;
  /**
   * Validation max
   */
  max?: number | null;
  /**
   * Validation min length
   */
  minLength?: number | null;
  /**
   * Validation max length
   */
  maxLength?: number | null;
  /**
   * Validation RegularExpression
   */
  regExp?: string | null;
  /**
   * Validation message
   */
  validationMessage?: string | null;
  /**
   * Allows to create child/nested entity
   */
  cascadeCreate?: boolean;
  /**
   * Allows to update child/nested entity
   */
  cascadeUpdate?: boolean;
  /**
   * Delete child/nested entity if reference was removed and the child/nested entity doesn't have nother references
   */
  cascadeDeleteUnreferenced?: boolean;
}

export interface EntityPropertyDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: EntityPropertyDto;
}

export interface EntityPropertyDtoPagedResultDto {
  items?: EntityPropertyDto[] | null;
  totalCount?: number;
}

export interface EntityPropertyDtoPagedResultDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: EntityPropertyDtoPagedResultDto;
}

export interface EntityPropertyGraphQLDataResult {
  deletionTime?: string | null;
  readOnly?: boolean | null;
  cascadeDeleteUnreferenced?: boolean | null;
  dataType?: string;
  max?: number | null;
  cascadeUpdate?: boolean | null;
  suppress?: boolean | null;
  lastModifierUserId?: number | null;
  deleterUserId?: number | null;
  parentProperty?: string | null;
  itemsType?: string | null;
  referenceListName?: string;
  creationTime?: string | null;
  lastModificationTime?: string | null;
  creatorUserId?: number | null;
  source?: number | null;
  required?: boolean | null;
  entityType?: string;
  isFrameworkRelated?: boolean | null;
  minLength?: number | null;
  dataFormat?: string;
  sortOrder?: number | null;
  maxLength?: number | null;
  min?: number | null;
  name?: string;
  entityConfig?: string | null;
  label?: string;
  cascadeCreate?: boolean | null;
  validationMessage?: string;
  isDeleted?: boolean | null;
  referenceListModule?: string;
  audited?: boolean | null;
  regExp?: string;
  description?: string;
  _className?: string;
  _jObject?: {
    [key: string]: JToken;
  };
  id?: string;
}

export interface EntityPropertyGraphQLDataResultAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: EntityPropertyGraphQLDataResult;
}

/**
 * NOTE: shape of the response depends on the `properties` argument
 */
export interface EntityPropertyPagedResultDtoGraphQLDataResult {
  totalCount?: number;
  items?: ProxyDynamicDtoEntityPropertyGuid[];
}

export interface EntityPropertyPagedResultDtoGraphQLDataResultAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: EntityPropertyPagedResultDtoGraphQLDataResult;
}

export interface ErrorInfo {
  code?: number;
  message?: string | null;
  details?: string | null;
  validationErrors?: ValidationErrorInfo[] | null;
}

export type JToken = JToken[];

/**
 * Indicate the source of the entity/property metadata
 */
export type MetadataSourceType = 1 | 2;

export interface ProxyDynamicDtoEntityPropertyGuid {
  id?: string;
  _jObject?: {
    [key: string]: JToken;
  } | null;
  deletionTime?: string | null;
  readOnly?: boolean | null;
  cascadeDeleteUnreferenced?: boolean | null;
  dataType?: string | null;
  max?: number | null;
  cascadeUpdate?: boolean | null;
  suppress?: boolean | null;
  lastModifierUserId?: number | null;
  deleterUserId?: number | null;
  parentProperty?: string | null;
  itemsType?: string | null;
  referenceListName?: string | null;
  creationTime?: string | null;
  lastModificationTime?: string | null;
  creatorUserId?: number | null;
  source?: number | null;
  required?: boolean | null;
  entityType?: string | null;
  isFrameworkRelated?: boolean | null;
  minLength?: number | null;
  dataFormat?: string | null;
  sortOrder?: number | null;
  maxLength?: number | null;
  min?: number | null;
  name?: string | null;
  entityConfig?: string | null;
  label?: string | null;
  cascadeCreate?: boolean | null;
  validationMessage?: string | null;
  isDeleted?: boolean | null;
  referenceListModule?: string | null;
  audited?: boolean | null;
  regExp?: string | null;
  description?: string | null;
  _className?: string | null;
}

export interface ValidationErrorInfo {
  message?: string | null;
  members?: string[] | null;
}

export interface EntityPropertyCreateQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityPropertyCreateProps = Omit<
  MutateProps<
    EntityPropertyDtoAjaxResponse,
    AjaxResponseBase,
    EntityPropertyCreateQueryParams,
    EntityPropertyDto,
    void
  >,
  'path' | 'verb'
>;

export const EntityPropertyCreate = (props: EntityPropertyCreateProps) => (
  <Mutate<EntityPropertyDtoAjaxResponse, AjaxResponseBase, EntityPropertyCreateQueryParams, EntityPropertyDto, void>
    verb="POST"
    path={`/api/services/app/EntityProperty/Create`}
    {...props}
  />
);

export type UseEntityPropertyCreateProps = Omit<
  UseMutateProps<
    EntityPropertyDtoAjaxResponse,
    AjaxResponseBase,
    EntityPropertyCreateQueryParams,
    EntityPropertyDto,
    void
  >,
  'path' | 'verb'
>;

export const useEntityPropertyCreate = (props: UseEntityPropertyCreateProps) =>
  useMutate<EntityPropertyDtoAjaxResponse, AjaxResponseBase, EntityPropertyCreateQueryParams, EntityPropertyDto, void>(
    'POST',
    `/api/services/app/EntityProperty/Create`,
    props
  );

export type entityPropertyCreateProps = Omit<
  RestfulShesha.MutateProps<
    EntityPropertyDtoAjaxResponse,
    AjaxResponseBase,
    EntityPropertyCreateQueryParams,
    EntityPropertyDto,
    void
  >,
  'data'
>;
export const entityPropertyCreate = (data: EntityPropertyDto, props: entityPropertyCreateProps) =>
  RestfulShesha.mutate<
    EntityPropertyDtoAjaxResponse,
    AjaxResponseBase,
    EntityPropertyCreateQueryParams,
    EntityPropertyDto,
    void
  >('POST', `/api/services/app/EntityProperty/Create`, data, props);

export interface EntityPropertyGetQueryParams {
  id?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityPropertyGetProps = Omit<
  GetProps<EntityPropertyDtoAjaxResponse, AjaxResponseBase, EntityPropertyGetQueryParams, void>,
  'path'
>;

export const EntityPropertyGet = (props: EntityPropertyGetProps) => (
  <Get<EntityPropertyDtoAjaxResponse, AjaxResponseBase, EntityPropertyGetQueryParams, void>
    path={`/api/services/app/EntityProperty/Get`}
    {...props}
  />
);

export type UseEntityPropertyGetProps = Omit<
  UseGetProps<EntityPropertyDtoAjaxResponse, AjaxResponseBase, EntityPropertyGetQueryParams, void>,
  'path'
>;

export const useEntityPropertyGet = (props: UseEntityPropertyGetProps) =>
  useGet<EntityPropertyDtoAjaxResponse, AjaxResponseBase, EntityPropertyGetQueryParams, void>(
    `/api/services/app/EntityProperty/Get`,
    props
  );

export type entityPropertyGetProps = Omit<
  RestfulShesha.GetProps<EntityPropertyDtoAjaxResponse, AjaxResponseBase, EntityPropertyGetQueryParams, void>,
  'queryParams'
>;
export const entityPropertyGet = (queryParams: EntityPropertyGetQueryParams, props: entityPropertyGetProps) =>
  RestfulShesha.get<EntityPropertyDtoAjaxResponse, AjaxResponseBase, EntityPropertyGetQueryParams, void>(
    `/api/services/app/EntityProperty/Get`,
    queryParams,
    props
  );

export interface EntityPropertyUpdateQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityPropertyUpdateProps = Omit<
  MutateProps<
    EntityPropertyDtoAjaxResponse,
    AjaxResponseBase,
    EntityPropertyUpdateQueryParams,
    EntityPropertyDto,
    void
  >,
  'path' | 'verb'
>;

export const EntityPropertyUpdate = (props: EntityPropertyUpdateProps) => (
  <Mutate<EntityPropertyDtoAjaxResponse, AjaxResponseBase, EntityPropertyUpdateQueryParams, EntityPropertyDto, void>
    verb="PUT"
    path={`/api/services/app/EntityProperty/Update`}
    {...props}
  />
);

export type UseEntityPropertyUpdateProps = Omit<
  UseMutateProps<
    EntityPropertyDtoAjaxResponse,
    AjaxResponseBase,
    EntityPropertyUpdateQueryParams,
    EntityPropertyDto,
    void
  >,
  'path' | 'verb'
>;

export const useEntityPropertyUpdate = (props: UseEntityPropertyUpdateProps) =>
  useMutate<EntityPropertyDtoAjaxResponse, AjaxResponseBase, EntityPropertyUpdateQueryParams, EntityPropertyDto, void>(
    'PUT',
    `/api/services/app/EntityProperty/Update`,
    props
  );

export type entityPropertyUpdateProps = Omit<
  RestfulShesha.MutateProps<
    EntityPropertyDtoAjaxResponse,
    AjaxResponseBase,
    EntityPropertyUpdateQueryParams,
    EntityPropertyDto,
    void
  >,
  'data'
>;
export const entityPropertyUpdate = (data: EntityPropertyDto, props: entityPropertyUpdateProps) =>
  RestfulShesha.mutate<
    EntityPropertyDtoAjaxResponse,
    AjaxResponseBase,
    EntityPropertyUpdateQueryParams,
    EntityPropertyDto,
    void
  >('PUT', `/api/services/app/EntityProperty/Update`, data, props);

export interface EntityPropertyDeleteQueryParams {
  id?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityPropertyDeleteProps = Omit<
  MutateProps<void, unknown, EntityPropertyDeleteQueryParams, void, void>,
  'path' | 'verb'
>;

export const EntityPropertyDelete = (props: EntityPropertyDeleteProps) => (
  <Mutate<void, unknown, EntityPropertyDeleteQueryParams, void, void>
    verb="DELETE"
    path={`/api/services/app/EntityProperty/Delete`}
    {...props}
  />
);

export type UseEntityPropertyDeleteProps = Omit<
  UseMutateProps<void, unknown, EntityPropertyDeleteQueryParams, void, void>,
  'path' | 'verb'
>;

export const useEntityPropertyDelete = (props: UseEntityPropertyDeleteProps) =>
  useMutate<void, unknown, EntityPropertyDeleteQueryParams, void, void>(
    'DELETE',
    `/api/services/app/EntityProperty/Delete`,
    { ...props }
  );

export type entityPropertyDeleteProps = Omit<
  RestfulShesha.MutateProps<void, unknown, EntityPropertyDeleteQueryParams, void, void>,
  'data'
>;
export const entityPropertyDelete = (props: entityPropertyDeleteProps) =>
  RestfulShesha.mutate<void, unknown, EntityPropertyDeleteQueryParams, void, void>(
    'DELETE',
    `/api/services/app/EntityProperty/Delete`,
    undefined,
    props
  );

export interface EntityPropertyGetAllQueryParams {
  /**
   * Filter string in JsonLogic format
   */
  filter?: string;
  /**
   * Quick search string. Is used to search entities by text
   */
  quickSearch?: string;
  /**
   * List of specifications to apply on top of query
   */
  specifications?: string[];
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityPropertyGetAllProps = Omit<
  GetProps<EntityPropertyDtoPagedResultDtoAjaxResponse, AjaxResponseBase, EntityPropertyGetAllQueryParams, void>,
  'path'
>;

export const EntityPropertyGetAll = (props: EntityPropertyGetAllProps) => (
  <Get<EntityPropertyDtoPagedResultDtoAjaxResponse, AjaxResponseBase, EntityPropertyGetAllQueryParams, void>
    path={`/api/services/app/EntityProperty/GetAll`}
    {...props}
  />
);

export type UseEntityPropertyGetAllProps = Omit<
  UseGetProps<EntityPropertyDtoPagedResultDtoAjaxResponse, AjaxResponseBase, EntityPropertyGetAllQueryParams, void>,
  'path'
>;

export const useEntityPropertyGetAll = (props: UseEntityPropertyGetAllProps) =>
  useGet<EntityPropertyDtoPagedResultDtoAjaxResponse, AjaxResponseBase, EntityPropertyGetAllQueryParams, void>(
    `/api/services/app/EntityProperty/GetAll`,
    props
  );

export type entityPropertyGetAllProps = Omit<
  RestfulShesha.GetProps<
    EntityPropertyDtoPagedResultDtoAjaxResponse,
    AjaxResponseBase,
    EntityPropertyGetAllQueryParams,
    void
  >,
  'queryParams'
>;
export const entityPropertyGetAll = (queryParams: EntityPropertyGetAllQueryParams, props: entityPropertyGetAllProps) =>
  RestfulShesha.get<
    EntityPropertyDtoPagedResultDtoAjaxResponse,
    AjaxResponseBase,
    EntityPropertyGetAllQueryParams,
    void
  >(`/api/services/app/EntityProperty/GetAll`, queryParams, props);

export interface EntityPropertyQueryQueryParams {
  /**
   * List of properties to fetch in GraphQL-like syntax. Supports nested properties
   */
  properties?: string;
  id?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityPropertyQueryProps = Omit<
  GetProps<EntityPropertyGraphQLDataResultAjaxResponse, AjaxResponseBase, EntityPropertyQueryQueryParams, void>,
  'path'
>;

/**
 * Query entity data.
 * NOTE: don't use on prod, will be merged with the `Get`endpoint soon
 */
export const EntityPropertyQuery = (props: EntityPropertyQueryProps) => (
  <Get<EntityPropertyGraphQLDataResultAjaxResponse, AjaxResponseBase, EntityPropertyQueryQueryParams, void>
    path={`/api/services/app/EntityProperty/Query`}
    {...props}
  />
);

export type UseEntityPropertyQueryProps = Omit<
  UseGetProps<EntityPropertyGraphQLDataResultAjaxResponse, AjaxResponseBase, EntityPropertyQueryQueryParams, void>,
  'path'
>;

/**
 * Query entity data.
 * NOTE: don't use on prod, will be merged with the `Get`endpoint soon
 */
export const useEntityPropertyQuery = (props: UseEntityPropertyQueryProps) =>
  useGet<EntityPropertyGraphQLDataResultAjaxResponse, AjaxResponseBase, EntityPropertyQueryQueryParams, void>(
    `/api/services/app/EntityProperty/Query`,
    props
  );

export type entityPropertyQueryProps = Omit<
  RestfulShesha.GetProps<
    EntityPropertyGraphQLDataResultAjaxResponse,
    AjaxResponseBase,
    EntityPropertyQueryQueryParams,
    void
  >,
  'queryParams'
>;
/**
 * Query entity data.
 * NOTE: don't use on prod, will be merged with the `Get`endpoint soon
 */
export const entityPropertyQuery = (queryParams: EntityPropertyQueryQueryParams, props: entityPropertyQueryProps) =>
  RestfulShesha.get<
    EntityPropertyGraphQLDataResultAjaxResponse,
    AjaxResponseBase,
    EntityPropertyQueryQueryParams,
    void
  >(`/api/services/app/EntityProperty/Query`, queryParams, props);

export interface EntityPropertyQueryAllQueryParams {
  /**
   * List of properties to fetch in GraphQL-like syntax. Supports nested properties
   */
  properties?: string;
  /**
   * Filter string in JsonLogic format
   */
  filter?: string;
  /**
   * Quick search string. Is used to search entities by text
   */
  quickSearch?: string;
  /**
   * List of specifications to apply on top of query
   */
  specifications?: string[];
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityPropertyQueryAllProps = Omit<
  GetProps<
    EntityPropertyPagedResultDtoGraphQLDataResultAjaxResponse,
    AjaxResponseBase,
    EntityPropertyQueryAllQueryParams,
    void
  >,
  'path'
>;

/**
 * Query entities list
 * NOTE: don't use on prod, will be merged with the GetAll endpoint soon
 */
export const EntityPropertyQueryAll = (props: EntityPropertyQueryAllProps) => (
  <Get<
    EntityPropertyPagedResultDtoGraphQLDataResultAjaxResponse,
    AjaxResponseBase,
    EntityPropertyQueryAllQueryParams,
    void
  >
    path={`/api/services/app/EntityProperty/QueryAll`}
    {...props}
  />
);

export type UseEntityPropertyQueryAllProps = Omit<
  UseGetProps<
    EntityPropertyPagedResultDtoGraphQLDataResultAjaxResponse,
    AjaxResponseBase,
    EntityPropertyQueryAllQueryParams,
    void
  >,
  'path'
>;

/**
 * Query entities list
 * NOTE: don't use on prod, will be merged with the GetAll endpoint soon
 */
export const useEntityPropertyQueryAll = (props: UseEntityPropertyQueryAllProps) =>
  useGet<
    EntityPropertyPagedResultDtoGraphQLDataResultAjaxResponse,
    AjaxResponseBase,
    EntityPropertyQueryAllQueryParams,
    void
  >(`/api/services/app/EntityProperty/QueryAll`, props);

export type entityPropertyQueryAllProps = Omit<
  RestfulShesha.GetProps<
    EntityPropertyPagedResultDtoGraphQLDataResultAjaxResponse,
    AjaxResponseBase,
    EntityPropertyQueryAllQueryParams,
    void
  >,
  'queryParams'
>;
/**
 * Query entities list
 * NOTE: don't use on prod, will be merged with the GetAll endpoint soon
 */
export const entityPropertyQueryAll = (
  queryParams: EntityPropertyQueryAllQueryParams,
  props: entityPropertyQueryAllProps
) =>
  RestfulShesha.get<
    EntityPropertyPagedResultDtoGraphQLDataResultAjaxResponse,
    AjaxResponseBase,
    EntityPropertyQueryAllQueryParams,
    void
  >(`/api/services/app/EntityProperty/QueryAll`, queryParams, props);
