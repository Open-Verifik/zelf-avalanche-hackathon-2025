import * as Controller from "../controllers/zelf-key.controller.js";
import * as Middleware from "../middlewares/zelf-key.middleware.js";

/**
 * ZelfKey Routes - Password manager API endpoints
 * @author Miguel Trevino <miguel@zelf.world>
 */

const PATH = "/api/zelf-key";

export default (server) => {
	// Generic store data endpoint (handles all types)
	server.post(`${PATH}/store`, Middleware.storeDataValidation, Controller.storeData);

	// Specific data type endpoints
	server.post(`${PATH}/store/password`, Middleware.storePasswordValidation, Controller.storePassword);
	server.post(`${PATH}/store/notes`, Middleware.storeNotesValidation, Controller.storeNotes);
	server.post(`${PATH}/store/credit-card`, Middleware.storeCreditCardValidation, Controller.storeCreditCard);
	server.post(`${PATH}/store/contact`, Middleware.storeContactValidation, Controller.storeContact);
	server.post(`${PATH}/store/bank-details`, Middleware.storeBankDetailsValidation, Controller.storeBankDetails);

	// Retrieve and preview endpoints
	server.get(`${PATH}/list`, Middleware.listValidation, Controller.listData);
	server.post(`${PATH}/retrieve`, Middleware.retrieveValidation, Controller.retrieveData);
	server.post(`${PATH}/preview`, Middleware.previewValidation, Controller.previewData);
};
