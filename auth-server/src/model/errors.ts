// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { Response } from 'express';
import { NotFoundError, ValidationError } from 'objection';
import {
	CheckViolationError,
	DataError,
	DBError,
	ForeignKeyViolationError,
	NotNullViolationError,
	UniqueViolationError
} from 'objection-db-errors';

// In this example `res` is an express response object.
export default function errorHandler (err: Error | ValidationError | NotFoundError | UniqueViolationError | NotNullViolationError | ForeignKeyViolationError | CheckViolationError | DataError | DBError, res: Response): void {
	console.log(err && err.stack);
	if (err instanceof ValidationError) {
		switch (err.type) {
		case 'ModelValidation':
			res.status(400).send({
				data: err.data,
				message: err.message,
				type: 'ModelValidation'
			});
			break;
		case 'RelationExpression':
			res.status(400).send({
				data: {},
				message: err.message,
				type: 'InvalidRelationExpression'
			});
			break;
		case 'UnallowedRelation':
			res.status(400).send({
				data: {},
				message: err.message,
				type: 'UnallowedRelation'
			});
			break;
		case 'InvalidGraph':
			res.status(400).send({
				data: {},
				message: err.message,
				type: 'InvalidGraph'
			});
			break;
		default:
			res.status(400).send({
				data: {},
				message: err.message,
				type: 'UnknownValidationError'
			});
			break;
		}
	} else if (err instanceof NotFoundError) {
		res.status(404).send({
			data: {},
			message: err.message,
			type: 'NotFound'
		});
	} else if (err instanceof UniqueViolationError) {
		res.status(409).send({
			data: {
				columns: err.columns,
				constraint: err.constraint,
				table: err.table
			},
			message: err.message,
			type: 'UniqueViolation'
		});
	} else if (err instanceof NotNullViolationError) {
		res.status(400).send({
			data: {
				column: err.column,
				table: err.table
			},
			message: err.message,
			type: 'NotNullViolation'
		});
	} else if (err instanceof ForeignKeyViolationError) {
		res.status(409).send({
			data: {
				constraint: err.constraint,
				table: err.table
			},
			message: err.message,
			type: 'ForeignKeyViolation'
		});
	} else if (err instanceof CheckViolationError) {
		res.status(400).send({
			data: {
				constraint: err.constraint,
				table: err.table
			},
			message: err.message,
			type: 'CheckViolation'
		});
	} else if (err instanceof DataError) {
		res.status(400).send({
			data: {},
			message: err.message,
			type: 'InvalidData'
		});
	} else if (err instanceof DBError) {
		res.status(500).send({
			data: {},
			message: err.message,
			type: 'UnknownDatabaseError'
		});
	} else {
		res.status(500).send({
			data: {},
			message: err.message,
			type: 'UnknownError'
		});
	}
}

