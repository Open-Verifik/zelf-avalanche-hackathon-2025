const ZelfProofModule = require("./Repositories/ZelfProof/modules/zelf-proof.module.js");

async function simpleTest() {
	try {
		console.log("Testing encryptQRCode...");

		const publicData = { website: "test.com", username: "test" };
		const metadata = { type: "password" };
		const faceBase64 =
			"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";
		const masterPassword = "test123";

		const response = await ZelfProofModule.encryptQRCode({
			publicData,
			metadata,
			faceBase64,
			password: masterPassword,
			identifier: "password",
			requireLiveness: true,
			tolerance: "REGULAR",
			os: "DESKTOP",
		});

		console.log("Response type:", typeof response);
		console.log("Response keys:", Object.keys(response));
		console.log("Response length:", response.length);

		if (response.length) {
			console.log("First 10 elements:", Array.from(response).slice(0, 10));

			// Try to convert to string
			const asString = String.fromCharCode.apply(null, Array.from(response));
			console.log("As string (first 100 chars):", asString.substring(0, 100));

			// Check if it's base64
			if (asString.match(/^[A-Za-z0-9+/=]+$/)) {
				console.log("Looks like base64!");
				const decoded = Buffer.from(asString, "base64");
				console.log("Decoded length:", decoded.length);
				console.log("Decoded preview:", decoded.toString("binary").substring(0, 100));
			}
		}
	} catch (error) {
		console.error("Error:", error.message);
	}
}

simpleTest();
