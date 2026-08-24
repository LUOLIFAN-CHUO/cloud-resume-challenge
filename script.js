const apiUrl = "https://ngknde7bpj.execute-api.ap-northeast-1.amazonaws.com/count";

async function getVisitorCount() {
    const visitorCountElement = document.getElementById("visitorCount");
    if (!visitorCountElement) return;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        visitorCountElement.textContent = data.views;
    } catch (error) {
        console.error("Error fetching visitor count:", error);
        visitorCountElement.textContent = "1";
    }
}

getVisitorCount();

console.log("ラ・リキハン｜Cloud Engineer");