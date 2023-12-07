export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	DateTimeUtc: any;
	Uuid: any;
};

export type QueryRoot = {
	__typename?: 'QueryRoot';
	userById: User;
	users: Array<User>;
	mods: Array<Mod>;
	modById: Mod;
	modBySlug: Mod;
	modByAuthor: Array<Mod>;
	categories: Array<GCategory>;
	beatSaberVersions: Array<Scalars['String']>;
};

export type QueryRootUserByIdArgs = {
	id: Scalars['Uuid'];
	auth?: Maybe<Scalars['String']>;
};

export type QueryRootUsersArgs = {
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	auth?: Maybe<Scalars['String']>;
};

export type QueryRootModsArgs = {
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	version?: Maybe<Scalars['String']>;
};

export type QueryRootModByIdArgs = {
	id: Scalars['Uuid'];
};

export type QueryRootModBySlugArgs = {
	slug: Scalars['String'];
};

export type QueryRootModByAuthorArgs = {
	id: Scalars['Uuid'];
};

export type GVersionStats = {
	__typename?: 'GVersionStats';
	downloads: Scalars['Int'];
};

export type ModCategory = {
	__typename?: 'ModCategory';
	name: Scalars['String'];
	desc: Scalars['String'];
};

export type ModAuthor = {
	__typename?: 'ModAuthor';
	id: Scalars['Uuid'];
	username: Scalars['String'];
	displayName?: Maybe<Scalars['String']>;
	bio?: Maybe<Scalars['String']>;
	permissions: Scalars['Int'];
	avatar?: Maybe<Scalars['String']>;
	banner?: Maybe<Scalars['String']>;
	createdAt: Scalars['DateTimeUtc'];
	updatedAt: Scalars['DateTimeUtc'];
};

export type GVersion = {
	__typename?: 'GVersion';
	id: Scalars['Uuid'];
	modId: Scalars['Uuid'];
	version: Scalars['String'];
	approved: Scalars['Boolean'];
	downloadUrl: Scalars['String'];
	supportedGameVersions: Array<Scalars['String']>;
	stats: GVersionStats;
	createdAt: Scalars['DateTimeUtc'];
};

export type GModStats = {
	__typename?: 'GModStats';
	downloads: Scalars['Int'];
};

export type Mod = {
	__typename?: 'Mod';
	id: Scalars['Uuid'];
	slug: Scalars['String'];
	name: Scalars['String'];
	description?: Maybe<Scalars['String']>;
	icon?: Maybe<Scalars['String']>;
	cover?: Maybe<Scalars['String']>;
	author: ModAuthor;
	category: ModCategory;
	stats: GModStats;
	versions: Array<GVersion>;
	updatedAt: Scalars['DateTimeUtc'];
	createdAt: Scalars['DateTimeUtc'];
};

export type GCategory = {
	__typename?: 'GCategory';
	name: Scalars['String'];
	description: Scalars['String'];
};

export type User = {
	__typename?: 'User';
	id: Scalars['Uuid'];
	githubId: Scalars['String'];
	username: Scalars['String'];
	displayName?: Maybe<Scalars['String']>;
	email?: Maybe<Scalars['String']>;
	bio?: Maybe<Scalars['String']>;
	mods: Array<Mod>;
	permissions: Scalars['Int'];
	avatar?: Maybe<Scalars['String']>;
	banner?: Maybe<Scalars['String']>;
	apiKey?: Maybe<Scalars['String']>;
	createdAt: Scalars['DateTimeUtc'];
	updatedAt: Scalars['DateTimeUtc'];
};
