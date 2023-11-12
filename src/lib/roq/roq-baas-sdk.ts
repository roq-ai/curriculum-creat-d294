/* eslint-disable */
import { type CheckSelect, fetcher, marshal, makeUrl } from '@roq/client';
import type { Prisma, content, curriculum, institution, proposal, review, user } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';

export type RequestOptions = Record<string, any>;

interface ContentSDK {
  create: <
    T extends Prisma.contentCreateArgs,
    R extends CheckSelect<T, content, Prisma.contentGetPayload<T>>,
    U extends Omit<Prisma.contentCreateArgs, 'data'> & {
      data: Omit<Prisma.contentUncheckedCreateInput, 'proposal' | 'review'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.contentCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.contentCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.contentUpdateArgs,
    R extends Prisma.contentGetPayload<T>,
    U extends Omit<Prisma.contentUpdateArgs, 'data'> & {
      data: Omit<Prisma.contentUncheckedUpdateInput, 'proposal' | 'review'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.contentUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.contentUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.contentUpsertArgs, R extends Prisma.contentGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.contentUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.contentDeleteArgs, R extends Prisma.contentGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.contentDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.contentDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.contentDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.contentFindManyArgs, R extends GetFindResult<Prisma.$contentPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.contentFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.contentCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.contentCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.contentFindManyArgs,
    R extends GetFindResult<Prisma.$contentPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.contentFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.contentFindFirstArgs, R extends GetFindResult<Prisma.$contentPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.contentFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface CurriculumSDK {
  create: <
    T extends Prisma.curriculumCreateArgs,
    R extends CheckSelect<T, curriculum, Prisma.curriculumGetPayload<T>>,
    U extends Omit<Prisma.curriculumCreateArgs, 'data'> & {
      data: Prisma.curriculumUncheckedCreateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.curriculumCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.curriculumCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.curriculumUpdateArgs,
    R extends Prisma.curriculumGetPayload<T>,
    U extends Omit<Prisma.curriculumUpdateArgs, 'data'> & {
      data: Prisma.curriculumUncheckedUpdateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.curriculumUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.curriculumUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.curriculumUpsertArgs, R extends Prisma.curriculumGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.curriculumUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.curriculumDeleteArgs, R extends Prisma.curriculumGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.curriculumDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.curriculumDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.curriculumDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.curriculumFindManyArgs,
    R extends GetFindResult<Prisma.$curriculumPayload<DefaultArgs>, T>[],
  >(
    args?: Prisma.SelectSubset<T, Prisma.curriculumFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.curriculumCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.curriculumCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.curriculumFindManyArgs,
    R extends GetFindResult<Prisma.$curriculumPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.curriculumFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.curriculumFindFirstArgs,
    R extends GetFindResult<Prisma.$curriculumPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.curriculumFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface InstitutionSDK {
  create: <
    T extends Prisma.institutionCreateArgs,
    R extends CheckSelect<T, institution, Prisma.institutionGetPayload<T>>,
    U extends Omit<Prisma.institutionCreateArgs, 'data'> & {
      data: Omit<Prisma.institutionUncheckedCreateInput, 'user'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.institutionCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.institutionCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.institutionUpdateArgs,
    R extends Prisma.institutionGetPayload<T>,
    U extends Omit<Prisma.institutionUpdateArgs, 'data'> & {
      data: Omit<Prisma.institutionUncheckedUpdateInput, 'user'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.institutionUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.institutionUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.institutionUpsertArgs, R extends Prisma.institutionGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.institutionUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.institutionDeleteArgs, R extends Prisma.institutionGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.institutionDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.institutionDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.institutionDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.institutionFindManyArgs,
    R extends GetFindResult<Prisma.$institutionPayload<DefaultArgs>, T>[],
  >(
    args?: Prisma.SelectSubset<T, Prisma.institutionFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.institutionCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.institutionCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.institutionFindManyArgs,
    R extends GetFindResult<Prisma.$institutionPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.institutionFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.institutionFindFirstArgs,
    R extends GetFindResult<Prisma.$institutionPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.institutionFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface ProposalSDK {
  create: <
    T extends Prisma.proposalCreateArgs,
    R extends CheckSelect<T, proposal, Prisma.proposalGetPayload<T>>,
    U extends Omit<Prisma.proposalCreateArgs, 'data'> & {
      data: Prisma.proposalUncheckedCreateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.proposalCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.proposalCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.proposalUpdateArgs,
    R extends Prisma.proposalGetPayload<T>,
    U extends Omit<Prisma.proposalUpdateArgs, 'data'> & {
      data: Prisma.proposalUncheckedUpdateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.proposalUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.proposalUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.proposalUpsertArgs, R extends Prisma.proposalGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.proposalUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.proposalDeleteArgs, R extends Prisma.proposalGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.proposalDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.proposalDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.proposalDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.proposalFindManyArgs, R extends GetFindResult<Prisma.$proposalPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.proposalFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.proposalCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.proposalCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.proposalFindManyArgs,
    R extends GetFindResult<Prisma.$proposalPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.proposalFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.proposalFindFirstArgs, R extends GetFindResult<Prisma.$proposalPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.proposalFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface ReviewSDK {
  create: <
    T extends Prisma.reviewCreateArgs,
    R extends CheckSelect<T, review, Prisma.reviewGetPayload<T>>,
    U extends Omit<Prisma.reviewCreateArgs, 'data'> & {
      data: Prisma.reviewUncheckedCreateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.reviewCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.reviewCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.reviewUpdateArgs,
    R extends Prisma.reviewGetPayload<T>,
    U extends Omit<Prisma.reviewUpdateArgs, 'data'> & {
      data: Prisma.reviewUncheckedUpdateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.reviewUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.reviewUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.reviewUpsertArgs, R extends Prisma.reviewGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.reviewUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.reviewDeleteArgs, R extends Prisma.reviewGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.reviewDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.reviewDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.reviewDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.reviewFindManyArgs, R extends GetFindResult<Prisma.$reviewPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.reviewFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.reviewCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.reviewCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.reviewFindManyArgs,
    R extends GetFindResult<Prisma.$reviewPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.reviewFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.reviewFindFirstArgs, R extends GetFindResult<Prisma.$reviewPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.reviewFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface UserSDK {
  create: <
    T extends Prisma.userCreateArgs,
    R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
    U extends Omit<Prisma.userCreateArgs, 'data'> & {
      data: Omit<Prisma.userUncheckedCreateInput, 'content' | 'curriculum' | 'proposal' | 'review'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.userUpdateArgs,
    R extends Prisma.userGetPayload<T>,
    U extends Omit<Prisma.userUpdateArgs, 'data'> & {
      data: Omit<Prisma.userUncheckedUpdateInput, 'content' | 'curriculum' | 'proposal' | 'review'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.userFindManyArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.userCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.userFindManyArgs,
    R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.userFindFirstArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

export class RoqBaasSdk {
  private endpoint: string;
  private baseOptions: RequestOptions;

  public content!: ContentSDK;

  public curriculum!: CurriculumSDK;

  public institution!: InstitutionSDK;

  public proposal!: ProposalSDK;

  public review!: ReviewSDK;

  public user!: UserSDK;

  constructor(backendHost: string, baseOptions: RequestOptions = {}) {
    this.endpoint = backendHost;
    this.baseOptions = baseOptions;
    this.initSDK();
  }

  private initSDK() {
    const ctx = this;

    this.content = {
      create: async function createContent<
        T extends Prisma.contentCreateArgs,
        R extends CheckSelect<T, content, Prisma.contentGetPayload<T>>,
        U extends Omit<Prisma.contentCreateArgs, 'data'> & {
          data: Omit<Prisma.contentUncheckedCreateInput, 'proposal' | 'review'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/content/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyContent<
        T extends Prisma.contentCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.contentCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/content/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateContent<
        T extends Prisma.contentUpdateArgs,
        R extends Prisma.contentGetPayload<T>,
        U extends Omit<Prisma.contentUpdateArgs, 'data'> & {
          data: Omit<Prisma.contentUncheckedUpdateInput, 'proposal' | 'review'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/content/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyContent<
        T extends Prisma.contentUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.contentUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/content/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertContent<T extends Prisma.contentUpsertArgs, R extends Prisma.contentGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.contentUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/content/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteContent<T extends Prisma.contentDeleteArgs, R extends Prisma.contentGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.contentDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/content/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyContent<
        T extends Prisma.contentDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.contentDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/content/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyContent<
        T extends Prisma.contentFindManyArgs,
        R extends GetFindResult<Prisma.$contentPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.contentFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/content/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countContent<T extends Prisma.contentCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.contentCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/content/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountContent<
        T extends Prisma.contentFindManyArgs,
        R extends GetFindResult<Prisma.$contentPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.contentFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.content.findMany(args, options),
          ctx.content.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstContent<
        T extends Prisma.contentFindFirstArgs,
        R extends GetFindResult<Prisma.$contentPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.contentFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/content/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.curriculum = {
      create: async function createCurriculum<
        T extends Prisma.curriculumCreateArgs,
        R extends CheckSelect<T, curriculum, Prisma.curriculumGetPayload<T>>,
        U extends Omit<Prisma.curriculumCreateArgs, 'data'> & {
          data: Prisma.curriculumUncheckedCreateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/curriculum/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyCurriculum<
        T extends Prisma.curriculumCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.curriculumCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/curriculum/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateCurriculum<
        T extends Prisma.curriculumUpdateArgs,
        R extends Prisma.curriculumGetPayload<T>,
        U extends Omit<Prisma.curriculumUpdateArgs, 'data'> & {
          data: Prisma.curriculumUncheckedUpdateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/curriculum/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyCurriculum<
        T extends Prisma.curriculumUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.curriculumUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/curriculum/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertCurriculum<
        T extends Prisma.curriculumUpsertArgs,
        R extends Prisma.curriculumGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.curriculumUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/curriculum/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteCurriculum<
        T extends Prisma.curriculumDeleteArgs,
        R extends Prisma.curriculumGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.curriculumDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/curriculum/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyCurriculum<
        T extends Prisma.curriculumDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.curriculumDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/curriculum/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyCurriculum<
        T extends Prisma.curriculumFindManyArgs,
        R extends GetFindResult<Prisma.$curriculumPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.curriculumFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/curriculum/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countCurriculum<T extends Prisma.curriculumCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.curriculumCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/curriculum/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountCurriculum<
        T extends Prisma.curriculumFindManyArgs,
        R extends GetFindResult<Prisma.$curriculumPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.curriculumFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.curriculum.findMany(args, options),
          ctx.curriculum.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstCurriculum<
        T extends Prisma.curriculumFindFirstArgs,
        R extends GetFindResult<Prisma.$curriculumPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.curriculumFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/curriculum/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.institution = {
      create: async function createInstitution<
        T extends Prisma.institutionCreateArgs,
        R extends CheckSelect<T, institution, Prisma.institutionGetPayload<T>>,
        U extends Omit<Prisma.institutionCreateArgs, 'data'> & {
          data: Omit<Prisma.institutionUncheckedCreateInput, 'user'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/institution/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyInstitution<
        T extends Prisma.institutionCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.institutionCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/institution/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateInstitution<
        T extends Prisma.institutionUpdateArgs,
        R extends Prisma.institutionGetPayload<T>,
        U extends Omit<Prisma.institutionUpdateArgs, 'data'> & {
          data: Omit<Prisma.institutionUncheckedUpdateInput, 'user'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/institution/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyInstitution<
        T extends Prisma.institutionUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.institutionUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/institution/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertInstitution<
        T extends Prisma.institutionUpsertArgs,
        R extends Prisma.institutionGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.institutionUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/institution/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteInstitution<
        T extends Prisma.institutionDeleteArgs,
        R extends Prisma.institutionGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.institutionDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/institution/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyInstitution<
        T extends Prisma.institutionDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.institutionDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/institution/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyInstitution<
        T extends Prisma.institutionFindManyArgs,
        R extends GetFindResult<Prisma.$institutionPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.institutionFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/institution/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countInstitution<T extends Prisma.institutionCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.institutionCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/institution/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountInstitution<
        T extends Prisma.institutionFindManyArgs,
        R extends GetFindResult<Prisma.$institutionPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.institutionFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.institution.findMany(args, options),
          ctx.institution.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstInstitution<
        T extends Prisma.institutionFindFirstArgs,
        R extends GetFindResult<Prisma.$institutionPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.institutionFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/institution/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.proposal = {
      create: async function createProposal<
        T extends Prisma.proposalCreateArgs,
        R extends CheckSelect<T, proposal, Prisma.proposalGetPayload<T>>,
        U extends Omit<Prisma.proposalCreateArgs, 'data'> & {
          data: Prisma.proposalUncheckedCreateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/proposal/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyProposal<
        T extends Prisma.proposalCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.proposalCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/proposal/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateProposal<
        T extends Prisma.proposalUpdateArgs,
        R extends Prisma.proposalGetPayload<T>,
        U extends Omit<Prisma.proposalUpdateArgs, 'data'> & {
          data: Prisma.proposalUncheckedUpdateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/proposal/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyProposal<
        T extends Prisma.proposalUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.proposalUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/proposal/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertProposal<
        T extends Prisma.proposalUpsertArgs,
        R extends Prisma.proposalGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.proposalUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/proposal/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteProposal<
        T extends Prisma.proposalDeleteArgs,
        R extends Prisma.proposalGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.proposalDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/proposal/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyProposal<
        T extends Prisma.proposalDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.proposalDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/proposal/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyProposal<
        T extends Prisma.proposalFindManyArgs,
        R extends GetFindResult<Prisma.$proposalPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.proposalFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/proposal/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countProposal<T extends Prisma.proposalCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.proposalCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/proposal/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountProposal<
        T extends Prisma.proposalFindManyArgs,
        R extends GetFindResult<Prisma.$proposalPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.proposalFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.proposal.findMany(args, options),
          ctx.proposal.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstProposal<
        T extends Prisma.proposalFindFirstArgs,
        R extends GetFindResult<Prisma.$proposalPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.proposalFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/proposal/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.review = {
      create: async function createReview<
        T extends Prisma.reviewCreateArgs,
        R extends CheckSelect<T, review, Prisma.reviewGetPayload<T>>,
        U extends Omit<Prisma.reviewCreateArgs, 'data'> & {
          data: Prisma.reviewUncheckedCreateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/review/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyReview<T extends Prisma.reviewCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.reviewCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/review/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateReview<
        T extends Prisma.reviewUpdateArgs,
        R extends Prisma.reviewGetPayload<T>,
        U extends Omit<Prisma.reviewUpdateArgs, 'data'> & {
          data: Prisma.reviewUncheckedUpdateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/review/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyReview<T extends Prisma.reviewUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.reviewUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/review/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertReview<T extends Prisma.reviewUpsertArgs, R extends Prisma.reviewGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.reviewUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/review/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteReview<T extends Prisma.reviewDeleteArgs, R extends Prisma.reviewGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.reviewDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/review/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyReview<T extends Prisma.reviewDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.reviewDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/review/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyReview<
        T extends Prisma.reviewFindManyArgs,
        R extends GetFindResult<Prisma.$reviewPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.reviewFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/review/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countReview<T extends Prisma.reviewCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.reviewCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/review/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountReview<
        T extends Prisma.reviewFindManyArgs,
        R extends GetFindResult<Prisma.$reviewPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.reviewFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.review.findMany(args, options),
          ctx.review.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstReview<
        T extends Prisma.reviewFindFirstArgs,
        R extends GetFindResult<Prisma.$reviewPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.reviewFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/review/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.user = {
      create: async function createUser<
        T extends Prisma.userCreateArgs,
        R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
        U extends Omit<Prisma.userCreateArgs, 'data'> & {
          data: Omit<Prisma.userUncheckedCreateInput, 'content' | 'curriculum' | 'proposal' | 'review'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyUser<T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateUser<
        T extends Prisma.userUpdateArgs,
        R extends Prisma.userGetPayload<T>,
        U extends Omit<Prisma.userUpdateArgs, 'data'> & {
          data: Omit<Prisma.userUncheckedUpdateInput, 'content' | 'curriculum' | 'proposal' | 'review'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyUser<T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertUser<T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteUser<T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyUser<T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countUser<T extends Prisma.userCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.user.findMany(args, options),
          ctx.user.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstUser<
        T extends Prisma.userFindFirstArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };
  }
}
