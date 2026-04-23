***
import ms from "ms";

const TIMEOUT_MS = ms("2s")

const fetchWithTimeout = async (url: string, options?: RequestInit) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });
        return response;
    } catch (error) {
        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
};

export default fetchWithTimeout;
***