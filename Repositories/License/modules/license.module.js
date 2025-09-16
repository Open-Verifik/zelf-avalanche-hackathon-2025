import { getEncryptionInstance } from "../../ZelfProof/modules/zelf-auth.module.js";

/**
 * License Module - Handles license retrieval from Zelf main server
 * @author Miguel Trevino <miguel@zelf.world>
 */

/**
 * Retrieve license information from Zelf main server
 * @param {Object} authToken - Authentication token from zelf-auth
 * @returns {Promise<Object>} License information
 */
const getLicense = async (authToken) => {
    // Get authenticated axios instance using zelf-auth
    const axios = await getEncryptionInstance();

    // Call Zelf main server to get license information
    const response = await axios.get("/api/license/my-license");

    if (!response.data?.data) {
        throw new Error("License not found");
    }

    const myLicense = response.data?.data.myLicense;
    const zelfAccount = response.data?.data.zelfAccount;

    return {
        success: true,
        license: {
            url: myLicense.url,
            ...myLicense.metadata.keyvalues,
            zelfAccount: {
                url: zelfAccount.url,
                ...zelfAccount.metadata.keyvalues,
            },
            zelfAccount: zelfAccount.metadata.keyvalues,
        },
        rawLicense: myLicense,
        rawZelfAccount: zelfAccount,
        message: "License retrieved successfully",
    };
};

export { getLicense };
