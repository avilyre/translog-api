import setupKnex from 'knex';
import { databaseConfig } from '../config.js';

export const knex = setupKnex(databaseConfig);