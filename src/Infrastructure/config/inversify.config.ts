import 'reflect-metadata';
import {Container}              from 'inversify';
import {TYPES}                  from '../../types';
import {UserRepository}         from '../../Domain/User/UserRepository';
import {InMemoryUserRepository} from '../InMemory/InMemoryUserRepository';

const container = new Container();
container.bind<UserRepository>(TYPES.UserRepository).to(InMemoryUserRepository);

export default container;
