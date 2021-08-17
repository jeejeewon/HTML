<link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css">
<link rel="stylesheet" href="http://jeewon.dothome.co.kr/adm2/css/webfont.css">
<link rel="stylesheet" href="http://jeewon.dothome.co.kr/adm2/css/admin.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://kit.fontawesome.com/a076d05399.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

<header>
    <div id="side_bar">
        <div id="logo"></div>
        <ul class="menu_list_01_group">
            <li class="menu_list_01">
                <div class="menu_button"><span class="dripicons-gear menu_icon"></span>환경설정<span
                            class="dripicons-chevron-right"></span></div>
                <ul class="menu_list_02_group">
                    <li>기본환경설정</li>
                    <li>관리권한설정</li>
                    <li>테마설정</li>
                    <li>메뉴설정</li>
                    <li>메일 테스트</li>
                    <li>세션파일 일괄삭제</li>
                    <li>캐시파일 일괄삭제</li>
                    <li>캡챠파일 일괄삭제</li>
                    <li>썸네일파일 일괄삭제</li>
                    <li>phpinfo()</li>
                    <li>Browscap 업데이트</li>
                    <li>접속로그 변환</li>
                    <li>DB업그레이드</li>
                    <li>부가서비스</li>
                </ul>
            </li>
            <li class="menu_list_01">
                <div class="menu_button"><span class="dripicons-user menu_icon"></span>회원관리<span
                            class="dripicons-chevron-right"></span></div>
                <ul class="menu_list_02_group">
                    <li>회원관리</li>
                    <li>회원메일발송</li>
                    <li>접속자집계</li>
                    <li>접속자검색</li>
                    <li>접속자로그삭제</li>
                    <li>포인트관리</li>
                    <li>투표관리</li>
                </ul>
            </li>
            <li class="menu_list_01">
                <div class="menu_button"><span class="dripicons-list menu_icon"></span>게시판관리<span
                            class="dripicons-chevron-right"></span></div>
                <ul class="menu_list_02_group">
                    <li>게시판관리</li>
                    <li>게시판그룹관리</li>
                    <li>인기검색어관리</li>
                    <li>인기검색어순위</li>
                    <li>1:1문의설정</li>
                    <li>내용관리</li>
                    <li>FAQ관리</li>
                    <li>글, 댓글 현황</li>
                </ul>
            </li>
            <li class="menu_list_01">
                <div class="menu_button"><span class="dripicons-mail menu_icon"></span>SMS관리<span
                            class="dripicons-chevron-right"></span></div>
                <ul class="menu_list_02_group">
                    <li>SMS 기본설정</li>
                    <li>회원정보업데이트</li>
                    <li>문자 보내기</li>
                    <li>전송내역-건별</li>
                    <li>전송내역-번호별</li>
                    <li>이모티콘 그룹</li>
                    <li>이모티콘 관리</li>
                    <li>휴대폰번호 그룹</li>
                    <li>휴대폰번호 관리</li>
                    <li>휴대폰번호 파일</li>
                </ul>
            </li>
        </ul>
    </div>

    <script>
        $(function () {

            $(".menu_list_01").click(function () {
                $(this).children(".menu_button").each(function () {

                    $(this).toggleClass("active");
                    $(".menu_button").not(this).removeClass("active");

                    $(this).children(".dripicons-chevron-right").each(function () {
                        $(this).toggleClass("active");
                        $(".dripicons-chevron-right").not(this).removeClass("active");
                    });

                });
                $(this).children("ul").each(function () {
                    $(this).slideToggle(500);
                    $(".menu_list_01>ul").not(this).slideUp(500);
                });
            });

        });
    </script>

    <nav>
        <div id="bar_wrap">
            <div class="search">
                <span class="search_icon lnr lnr-magnifier"></span>
                <input type="text" placeholder="Search...">
                <button>search</button>
            </div>
            <ul class="dropdown_group">
                <li class="lang dropdown_btn">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="flag_icon">
                            <img src="http://jeewon.dothome.co.kr/adm2/img/us.jpg" alt="flag_us">
                        </span>
                    <p>english</p>
                    <span class="dripicons-chevron-down "></span>
                    </a>
                    <ul class="lang_list dropdown_custom dropdown-menu list_hover" aria-labelledby="dropdownMenuLink">
                        <li>
                            <span class="flag_icon">
                                <img src="http://jeewon.dothome.co.kr/adm2/img/germany.jpg" alt="flag_germany">
                            </span>
                            <p>german</p>
                        </li>
                        <li>
                            <span class="flag_icon">
                                <img src="http://jeewon.dothome.co.kr/adm2/img/italy.jpg" alt="flag_italy">
                           </span>
                            <p>italian</p>
                        </li>
                        <li>
                            <span class="flag_icon">
                                <img src="http://jeewon.dothome.co.kr/adm2/img/spain.jpg" alt="flag_spain">
                            </span>
                            <p>spanish</p>
                        </li>
                        <li>
                            <span class="flag_icon">
                                <img src="http://jeewon.dothome.co.kr/adm2/img/russia.jpg" alt="flag_russia">
                            </span>
                            <p>russian</p>
                        </li>
                    </ul>
                </li>
                <li class="notice dropdown_btn">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="dripicons-bell hd_icon"></span>
                    </a>
                    <div class="notice_list_wrap dropdown_custom dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <div class="notice_list_top">
                            <p>notification</p>
                            <small>clear all</small>
                        </div>
                        <ul class="notice_list list_hover">
                            <li>
                                <div class="notice_list_thumb"></div>
                                <div class="notice_list_text">
                                    <p>Caleb Flakelar commented on Admin</p>
                                    <small>1 min ago</small>
                                </div>
                            </li>
                            <li>
                                <div class="notice_list_thumb"></div>
                                <div class="notice_list_text">
                                    <p>Caleb Flakelar commented on Admin</p>
                                    <small>1 min ago</small>
                                </div>
                            </li>
                            <li>
                                <div class="notice_list_thumb"></div>
                                <div class="notice_list_text">
                                    <p>Caleb Flakelar commented on Admin</p>
                                    <small>1 min ago</small>
                                </div>
                            </li>
                            <li>
                                <div class="notice_list_thumb"></div>
                                <div class="notice_list_text">
                                    <p>Caleb Flakelar commented on Admin</p>
                                    <small>1 min ago</small>
                                </div>
                            </li>
                            <li>
                                <div class="notice_list_thumb"></div>
                                <div class="notice_list_text">
                                    <p>Caleb Flakelar commented on Admin</p>
                                    <small>1 min ago</small>
                                </div>
                            </li>
                            <li>
                                <div class="notice_list_thumb"></div>
                                <div class="notice_list_text">
                                    <p>Caleb Flakelar commented on Admin</p>
                                    <small>1 min ago</small>
                                </div>
                            </li>
                        </ul>
                        <div class="notice_list_bottom">view all</div>
                    </div>
                </li>
                <li class="shortcut">
                    <span class="dripicons-view-apps hd_icon"></span>
                </li>
                <li class="settings">
                    <span class="dripicons-home hd_icon"></span>
                </li>
                <li class="profile dropdown_btn">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div class="profile_wrap">
                        <span class="profile_img"></span>
                        <div class="profile_text">
                            <p>admin</p>
                            <p>관리자</p>
                        </div>
                    </div>
                    </a>
                    <div class="profile_list_wrap dropdown_custom dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <ul class="profile_list list_hover">
                            <li><i class="xi-profile"></i><p>관리자</p></li>
                            <li><i class="xi-log-out"></i><p>로그아웃</p></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </nav>

    <script>
        // $(function () {
        //     $(".dropdown_group li").click(function (e){
        //         $(this).each(function () {
        //             $(this).children("ul").toggleClass("active");
        //         });
        //     });
        // });
    </script>

</header>


