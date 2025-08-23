import JoiDate from "@joi/date";
import Joi from "joi";

const JoiExtended = Joi.extend(JoiDate);

const recordShow = ["10", "25", "50", "100"];

const crypto = ["ETH", "SOL", "BTC", "CB"];

const zelfNameDuration = ["1"]; //, "2", "3", "4", "5", "lifetime"

const provinceCA = ["AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"];

const base64ImageRegExp = /^data:image\/(png|jpeg|jpg|gif|bmp);base64,([A-Za-z0-9+/=]+)$/;

const _customErrors = (errors) => {
	errors.forEach((err) => {
		switch (err.code) {
			case "forbidden":
				err.message = `forbidden ${err.local.key}\n`;

				break;
			case "alternatives.match":
				err.message = `invalid ${err.local.key}\n`;

				break;
			case "any.required":
				err.message = `missing ${err.local.key}\n`;

				break;
			case "string.empty":
				err.message = `missing ${err.local.key}\n`;

				break;
			case "date.format":
				err.message = `${err.local.key} format required: ${err.local.format}\n`;

				break;
			case "number.min":
				err.message = `${err.local.key} minimun is: ${err.local.limit}\n`;

				break;
			case "number.max":
				err.message = `${err.local.key} maximum is: ${err.local.limit}\n`;

				break;
			case "string.min":
				err.message = `${err.local.key} minimun length: ${err.local.limit}\n`;

				break;
			case "string.max":
				err.message = `${err.local.key} maximum length: ${err.local.limit}\n`;

				break;
			case "string.regex":
			case "object.regex":
			case "string.pattern.base":
				err.message = `Format incorrect: ${err.local.key}`;

				break;
			case "any.only":
				err.message = `${err.local.key} must be one of: [${err.local.valids.join(",")}]`;

				break;
			default:
				// console.error(err);
				break;
		}
	});

	return errors;
};

const array = () => JoiExtended.array();
const boolean = () => JoiExtended.boolean().error(_customErrors);
const dateOfBirth = () => JoiExtended.date().raw().format("DD/MM/YYYY").error(_customErrors);
const dateWithFormat = () => JoiExtended.date().raw().format("DD/MM/YYYY").error(_customErrors);
const firstName = () => JoiExtended.string().min(2).error(_customErrors);
const forbidden = () => JoiExtended.forbidden().error(_customErrors);
const imageBase64WithType = () => JoiExtended.string().regex(base64ImageRegExp).error(_customErrors);
const lastName = () => JoiExtended.string().min(2).error(_customErrors);
const line = () => JoiExtended.string().min(1).error(_customErrors);
const manufacturer = () => JoiExtended.string().min(1).error(_customErrors);
const model = () => JoiExtended.string().min(1).error(_customErrors);
const number = () => JoiExtended.number().error(_customErrors);
const minMaxNumber = (min, max) => JoiExtended.number().min(min).max(max).error(_customErrors);
const object = (schema) => JoiExtended.object(schema);
const objectId = () => JoiExtended.string().hex().length(24).error(_customErrors);
const string = () => JoiExtended.string().error(_customErrors);
const stringOrNumber = () => JoiExtended.alternatives().try(JoiExtended.string(), JoiExtended.number());
const symbol = () => JoiExtended.string().min(1).error(_customErrors);

const zelfNameDuration_ = () =>
	JoiExtended.string()
		.valid(...zelfNameDuration)
		.error(_customErrors);

const crypto_ = () =>
	JoiExtended.string()
		.valid(...crypto)
		.error(_customErrors);

const province = () =>
	JoiExtended.string()
		.valid(...provinceCA)
		.error(_customErrors);

const showRecords = () =>
	JoiExtended.string()
		.valid(...recordShow)
		.error(_customErrors);

const stringEnum = (enumArray) =>
	JoiExtended.string()
		.valid(...enumArray)
		.error(_customErrors);

const urlSecure = () =>
	JoiExtended.string()
		.uri({
			scheme: ["https"],
			allowQuerySquareBrackets: true,
		})
		.error(_customErrors);

const validate = (schemaObj, params, or = undefined) => {
	let schema = JoiExtended.object(schemaObj)
		.options({
			abortEarly: false,
		})
		.unknown(true);

	if (or) {
		schema = schema.or(...or);
	}

	return schema.validate(params);
};

const fileObject = () =>
	JoiExtended.object({
		base64: JoiExtended.string().required(),
		extension: JoiExtended.string().required(),
	});

const alternative = (key, value, then, otherwise) => {
	return JoiExtended.alternatives().conditional(key, { is: value, then, otherwise });
};

const alternativeMany = (schema) => {
	return JoiExtended.alternatives().try(schema);
};

const jsonObjectWithMinKeys = () =>
	JoiExtended.object()
		.min(1) // Ensures the object has at least one key
		.error(_customErrors);

export {
	alternative,
	alternativeMany,
	array,
	boolean,
	crypto_,
	dateOfBirth,
	dateWithFormat,
	fileObject,
	firstName,
	forbidden,
	imageBase64WithType,
	jsonObjectWithMinKeys,
	lastName,
	line,
	manufacturer,
	minMaxNumber,
	model,
	number,
	object,
	objectId,
	province,
	showRecords,
	string,
	stringEnum,
	stringOrNumber,
	symbol,
	urlSecure,
	validate,
	zelfNameDuration_,
};
