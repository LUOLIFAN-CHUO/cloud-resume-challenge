
document.getElementById("currentDate").textContent =
    new Date().toLocaleDateString();

const apiUrl = "https://ngknde7bpj.execute-api.ap-northeast-1.amazonaws.com/count";

async function getVisitorCount() {
    const visitorCountElement = document.getElementById("visitorCount");
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // 更新页面 DOM 结构
        visitorCountElement.textContent = data.views;
    } catch (error) {
        console.error("Error fetching visitor count:", error);
        visitorCountElement.textContent = "1"; // 容错备用显示
    }
}

getVisitorCount();

 console.log("ラ・リキハン｜Cloud Engineer");