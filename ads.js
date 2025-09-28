/**
 * @file ads.js
 * @description Script tự chèn, quản lý và hiển thị text link quảng cáo ngẫu nhiên.
 * @version 2.0.0
 *
 * CÁCH SỬ DỤNG:
 * 1. Chỉnh sửa danh sách quảng cáo và các tùy chọn bên dưới.
 * 2. Tải file này lên server.
 * 3. Chèn duy nhất 1 dòng mã vào website của bạn ở nơi muốn hiển thị quảng cáo:
 * <script src="https://your-domain.com/path/to/ads.js"></script>
 */

(function() {
    // =================================================================
    // PHẦN CẤU HÌNH - BẠN CHỈ CẦN CHỈNH SỬA Ở ĐÂY
    // =================================================================

    // 1. Số lượng quảng cáo tối đa muốn hiển thị.
    const maxAdsToShow = 4;

    // 2. Danh sách các quảng cáo (text và url).
    const adsData = [
        { text: 'Dịch vụ thiết kế website chuyên nghiệp, giá rẻ', url: 'https://example.com/web-design' },
        { text: 'Hosting tốc độ cao - Giảm giá 50% hôm nay', url: 'https://example.com/hosting' },
        { text: 'Công cụ SEO hàng đầu cho doanh nghiệp', url: 'https://example.com/seo-tool' },
        { text: 'Đăng ký tên miền .com chỉ với 99k', url: 'https://example.com/domain' },
        { text: 'Khóa học Marketing Online từ cơ bản đến nâng cao', url: 'https://example.com/marketing-course' },
        { text: 'Giải pháp Email doanh nghiệp bảo mật', url: 'https://example.com/email-service' },
        { text: 'Nhận ngay voucher 500k khi mua sắm online', url: 'https://example.com/voucher' },
        { text: 'Dịch vụ viết bài chuẩn SEO, thu hút traffic', url: 'https://example.com/content-writing' }
        // Thêm các quảng cáo khác vào đây...
    ];


    // =================================================================
    // PHẦN MÃ NGUỒN - KHÔNG CẦN CHỈNH SỬA PHẦN DƯỚI NÀY
    // =================================================================

    try {
        // Lấy thẻ script hiện tại đang được thực thi.
        const currentScript = document.currentScript;
        if (!currentScript) {
            console.error("Không thể xác định vị trí script để chèn quảng cáo.");
            return;
        }

        // Tạo container chính cho tất cả quảng cáo.
        const adContainer = document.createElement('div');
        adContainer.className = 'js-ad-container';

        // Xáo trộn danh sách và chọn ra số lượng cần hiển thị.
        const shuffledAds = [...adsData].sort(() => 0.5 - Math.random());
        const adsToDisplay = shuffledAds.slice(0, maxAdsToShow);

        // Lặp qua và tạo HTML cho từng quảng cáo.
        adsToDisplay.forEach(ad => {
            const adWrapper = document.createElement('div');
            adWrapper.className = 'js-ad-item';

            const adLink = document.createElement('a');
            adLink.href = ad.url;
            adLink.textContent = ad.text;
            adLink.target = '_blank';
            adLink.rel = 'noopener noreferrer sponsored';

            adWrapper.appendChild(adLink);
            adContainer.appendChild(adWrapper);
        });

        // Chèn container chứa quảng cáo vào ngay trước thẻ script.
        currentScript.parentNode.insertBefore(adContainer, currentScript);

    } catch (error) {
        console.error("Đã có lỗi xảy ra khi hiển thị quảng cáo:", error);
    }
})();
