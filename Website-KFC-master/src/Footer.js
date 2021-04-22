import './Footer.css';

export default function Footer() {
    return(
        <div id="footer">
        <div class="container">
          <div class="d-flex justify-content-center">
            <a href="#" class="logo_footer"/><img src="https://kfcvietnam.com.vn/templates/images/logo_footer_vi.png"/>
          </div>
          <div class="footer_top">
            <div>
              <div class="row no-gutters">
                <div class="col">
                  <div class="card_item">
                    <div class="card_item_header">
                      <a href="#"><span>Thực đơn</span></a>
                    </div>
                    <div class="card_item_header">
                      <a href="#"><span>Nhà hàng</span></a>
                    </div>
                    <div class="card_item_header">
                      <a href="#"><span>Tin khuyến mãi</span></a>
                    </div>
                    <div class="card_item_header">
                      <a href="#"><span>Đặt tiệc sinh nhật</span></a>
                    </div>
                    <div class="card_item_header">
                      <a href="#"><span>Thành viên</span></a>
                    </div>
                    <div class="card_item_header d-inline-block d-lg-none">
                      <a href="#"><span>Giới thiệu</span></a>
                    </div>
                    <div class="card_item_header d-inline-block d-lg-none">
                      <a href="#" target="_blank"><span>Nghề nghiệp</span></a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card_item">
                    <div class="card_item_header d-none d-lg-block">
                      <a href="#"><span>Giới thiệu</span></a>
                    </div>
                    <nav class="nav flex-column">
                      <a class="nav-link" href="#"><span>KFC Việt Nam</span></a>
                      <a class="nav-link" href="#"><span>Tin tức</span></a>
                    </nav>
                  </div>
                </div>
                <div class="col">
                  <div class="card_item">
                    <div class="card_item_header d-none d-lg-block">
                      <a href="#"><span>Nghề nghiệp</span></a>
                    </div>
                    <nav class="nav flex-column">
                      <a class="nav-link" href="#" target="_blank"><span>Tuyển dụng</span></a>
                    </nav>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="row no-gutters">
                    <div class="col-6">
                      <div class="card_item">
                        <div class="card_item_header">
                          <a href="javascript:void(0);"><span>Kết nối với KFC</span></a>
                        </div>
                        <nav class="nav flex-column">
                          <a class="nav-link" href="#"><span>Liên hệ</span></a>
                        </nav>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="nav_social">
                        <ul class="nav justify-content-end">
                          <li class="nav-item">
                            <a class="nav-link" href="#" target="_blank"><img src="https://kfcvietnam.com.vn/templates/images/icon_fb_red.svg" alt=""/></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" target="_blank"><img src="https://kfcvietnam.com.vn/templates/images/icon_yt_red.svg" alt=""/></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" target="_blank"><img src="https://kfcvietnam.com.vn/templates/images/icon_ins_red.svg" alt=""/></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer_bot">
            <div class="row no-gutters">
              <div class="col-12 col-lg-6">
                <div>
                  <span>
                    <p><strong>CÔNG TY LIÊN DOANH TNHH KFC VIỆT NAM</strong></p>
                    <p>Số 292 Bà Triệu, P. Lê Đại Hành, Q. Hai Bà Trưng, TP. Hà Nội.</p>
                    <p>Điện thoại: <a href="#">(028) 38489828</a></p>
                    <p>Email: <a href="#">lienhe@kfcvietnam.com.vn</a></p>
                    <p>Mã số thuế: 0100773885</p>
                    <p>Ngày cấp: 29/10/1998 - Nơi cấp: Cục Thuế Thành Phố Hà Nội</p>
                  </span>
                </div>
              </div>
              <div class="col-12">
                <div class="text_copyright text-center">
                  <span>
                    <p>Chính sách và quy định chung | Chính sách hoạt động | Chính sách bảo mật thông tin</p><p>Copyright © 2021 KFC Vietnam</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}