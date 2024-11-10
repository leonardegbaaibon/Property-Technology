export const user_login = async (data) => {
    try {
        // Simulate a successful login without any checks
        const result = {
            success: true,
            message: "Login successful",
            user: {
                username: data.username, // Include the username in the response
                // Add any other user details you need here
            }
        };

        return result;
    } catch (error) {
        console.error(error); // Log the error for debugging
        return { error: error.message }; // Return a structured error response
    }
};