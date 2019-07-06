document.writeln("<!DOCTYPE html>");
document.writeln("<html>");
document.writeln("	<head>");
document.writeln("		<meta charset=\'UTF-8\'>");
document.writeln("		<title></title>");
document.writeln("		<link rel=\'stylesheet\' type=\'text/css\' href=\'swxfCSS/bootstrap.min.css\'/>");
document.writeln("		<link rel=\'stylesheet\' href=\'swxfCSS/header.css\' />");
document.writeln("		<script src=\'swxfJS/jquery.min.js\'></script>");
document.writeln("	    <script src=\'swxfJS/popper.min.js\'></script>");
document.writeln("	    <script src=\'swxfJS/bootstrap.min.js\'></script>");
document.writeln("	    <link rel=\'stylesheet\' type=\'text/css\' href=\'font-awesome-4.7.0/css/font-awesome.css\'/>");
document.writeln("		<link rel=\'stylesheet\' type=\'text/css\' href=\'swxfCSS/public.css\'/>");
document.writeln("	</head>");
document.writeln("	<body>");
document.writeln("	");
document.writeln("");
document.writeln("<div class=\'container-fluid\' id=\'top_nav\'>");
document.writeln("	    	<div class=\'navbar navbar-expand-md navbar-dark\' id=\'bg_sm\'>");
document.writeln("	        <!-- 1.最前面不折叠的菜单选项-->");
document.writeln("	        <a href=\'#\' class=\'navbar-brand d-md-none\' id=\'log\'><img class=\'p-0 m-0\' src=\'images/home_img/mobile_nav_logo.png\' alt=\'\' /></a>");
document.writeln("	        <!-- 2.在超小屏下出现的按钮-->");
document.writeln("	        <!-- 按钮上有三条线-->");
document.writeln("	        <!-- 是折叠区域的激发按钮-->");
document.writeln("	        <button class=\'navbar-toggler\' id=\'btn_left\'>");
document.writeln("	            <!-- 按钮上的三条横线-->");
document.writeln("	            <span class=\'navbar\'><i class=\' fa fa-bars\'></i></span>");
document.writeln("	        </button>");
document.writeln("	");
document.writeln("	         <button class=\'navbar-toggler\' id=\'btn_right\'>");
document.writeln("	            <!-- 按钮上的三条横线-->");
document.writeln("	           <span class=\'navbar\'><i class=\' fa fa-user-o\'></i></span>");
document.writeln("	        </button>");
document.writeln("	        <!-- 3.折叠的导航-->");
document.writeln("	        <div id=\'content\' class=\'collapse navbar-collapse\'>");
document.writeln("	            <div class=\'d-flex justify-content-between w-100\'>");
document.writeln("	            	<ul class=\'navbar-nav\'>");
document.writeln("		            	<li class=\'nav-item\'><a href=\'#\' class=\'nav-link  text-white\' id=\'bg_top_log\'></a></li>");
document.writeln("		                <li class=\'nav-item\' id=\'btn_g\'><a href=\'#\' class=\'nav-link  text-white\'>游戏 <i class=\'arrow fa fa-angle-down\'></i></a></li>");
document.writeln("		                <li class=\'nav-item\'><a href=\'#\' class=\'nav-link  text-white\'>商城</a></li>");
document.writeln("		                <li class=\'nav-item\'><a href=\'#\' class=\'nav-link  text-white\'>新闻</a></li>");
document.writeln("		                <li class=\'nav-item\' id=\'btn_d\'><a href=\'#\' class=\'nav-link  text-white\'>电子境界 <i class=\'arrow arrow1 fa fa-angle-down\'></i></a></li>");
document.writeln("		                <li class=\'nav-item\'><a href=\'#\' class=\'nav-link  text-white\'>暴雪年华</a></li>");
document.writeln("	            	</ul>");
document.writeln("	           		 <ul class=\'navbar-nav\'>");
document.writeln("		                <li class=\'nav-item\'><a href=\'#\' class=\'nav-link  text-white\'>支持</a></li>");
document.writeln("		                <li class=\'nav-item\' id=\'btn_reg\'><a href=\'#\' class=\'nav-link  text-white\'>你的通行证 <i class=\'arrow arrow2 fa fa-angle-down\'></i></a></li>");
document.writeln("	            	</ul>");
document.writeln("	            </div>");
document.writeln("	        </div>");
document.writeln("    </div>");
document.writeln("    <table></table>");
document.writeln("</div>");
document.writeln("<!--显示左边侧栏-->");
document.writeln("       <div id=\'left_asid\' class=\'left_asid\'>");
document.writeln("		<div id=\'\'>");
document.writeln("			<div>");
document.writeln("				<a id=\'off_left\' href=\'#\' class=\'text-left\'><i class=\'fa fa-times\'></i></a>");
document.writeln("			</div>");
document.writeln("            	<ul>");
document.writeln("            		<li><a href=\'#\'><img src=\'images/home_img/ow-SiteNavLogo.png\'/></a></li>");
document.writeln("            		<li><a href=\'#\'>首页</a></li>");
document.writeln("            		<li>");
document.writeln("            			<a id=\'btn_l_d\' href=\'#\'>游戏 <i class=\'arrow arrow3 fa fa-angle-down\'></i></a>");
document.writeln("            			<span id=\'sp\'>");
document.writeln("            				<span  class=\'left_select\'>");
document.writeln("            					<p><a href=\'#\'>概述</a></p>");
document.writeln("            					<p><a href=\'#\'>赞赏系统</a></p>");
document.writeln("            				</span>");
document.writeln("            			</span>");
document.writeln("            		</li>");
document.writeln("            		<li><a href=\'#\'>英雄</a></li>");
document.writeln("            		<li>");
document.writeln("            			<a href=\'#\' id=\'btn_l_d1\'>活动 <i class=\'arrow arrow4 fa fa-angle-down\'></i></a>");
document.writeln("            			<span id=\'sp\'>");
document.writeln("            				<span  class=\'left_select left_select1\'>");
document.writeln("            					<p><a href=\'#\'>夏季运动会</a></p>");
document.writeln("            					<p><a href=\'#\'>行动档案</a></p>");
document.writeln("            					<p><a href=\'#\'>欢度新春</a></p>");
document.writeln("            					<p><a href=\'#\'>雪国仙境</a></p>");
document.writeln("            					<p><a href=\'#\'>万圣夜惊魂</a></p>");
document.writeln("            					<p><a href=\'#\'>周年庆典</a></p>");
document.writeln("            				</span>");
document.writeln("            			</span>");
document.writeln("            		</li>");
document.writeln("            		<li><a href=\'#\'>视频图片</a></li>");
document.writeln("            		<li>");
document.writeln("            			<a id=\'btn_l_d2\' href=\'#\'>新闻 <i class=\'arrow arrow5 fa fa-angle-down\'></i></a>");
document.writeln("            			<span id=\'sp\'>");
document.writeln("            				<span  class=\'left_select left_select2\'>");
document.writeln("            					<p><a href=\'#\'>新闻</a></p>");
document.writeln("            					<p><a href=\'#\'>补丁</a></p>");
document.writeln("            				</span>");
document.writeln("            			</span>");
document.writeln("            		</li>");
document.writeln("            		<li><a href=\'#\'>下载</a></li>");
document.writeln("            		<li>");
document.writeln("            			<a id=\'btn_l_d3\' href=\'#\'>电子竞技 <i class=\'arrow arrow6 fa fa-angle-down\'></i></a>");
document.writeln("            			<span id=\'sp\'>");
document.writeln("            				<span  class=\'left_select left_select3\'>");
document.writeln("            					<p><a href=\'#\'>概述</a></p>");
document.writeln("            					<p><a href=\'#\'>守望先锋公开争霸赛</a></p>");
document.writeln("            					<p><a href=\'#\'>守望先锋挑战者选拔赛</a></p>");
document.writeln("            					<p><a href=\'#\'>守望先锋挑战者系列赛</a></p>");
document.writeln("            					<p><a href=\'#\'>守望先锋联赛</a></p>");
document.writeln("            				</span>");
document.writeln("            			</span>");
document.writeln("            		</li>");
document.writeln("            		<li>");
document.writeln("            			<a id=\'btn_l_d4\' href=\'#\'>社区 <i class=\'arrow arrow7 fa fa-angle-down\'></i></a>");
document.writeln("            			<span id=\'sp\'>");
document.writeln("            				<span  class=\'left_select left_select4\'>");
document.writeln("            					<p><a href=\'#\'>生涯数据</a></p>");
document.writeln("            					<p><a href=\'#\'>我们身边的英雄</a></p>");
document.writeln("            					<p><a href=\'#\'>论坛</a></p>");
document.writeln("            				</span>");
document.writeln("            		</li>");
document.writeln("            		<li><a href=\'#\' class=\'text-white w-100 bg-warning\'>立即下载</a></li>");
document.writeln("            	</ul>");
document.writeln("            	<div id=\'\' class=\'text-center\'>");
document.writeln("            		<img src=\'images/home_img/blizzard.png\'/>");
document.writeln("            	</div>");
document.writeln("            </div>");
document.writeln("	</div>   ");
document.writeln("	");
document.writeln("	");
document.writeln("	<div id=\'right_asid\' class=\'right_asid\'>");
document.writeln("		<div id=\'\'>");
document.writeln("			<div>");
document.writeln("				<a id=\'off_right\' href=\'#\' class=\'text-left\'><i class=\'fa fa-times\'></i></a>");
document.writeln("			</div>");
document.writeln("            	<ul>");
document.writeln("            		<li><a href=\'\'><span></span></a></li>");
document.writeln("            		<li><a href=\'#\' class=\'text-white bg-primary\'>登录</a></li>");
document.writeln("            		<li><a href=\'#\'><i class=\'fa fa-question-circle-o text-primary\'></i> 支持</a></li>");
document.writeln("            		<li><a href=\'#\'><i class=\'fa fa-cog text-primary\'></i> 账户</a></li>");
document.writeln("            		<li><a href=\'#\'><i class=\'fa fa-user-plus text-primary\'></i> 注册</a></li>");
document.writeln("            		<li><a href=\'#\'>首页</a></li>");
document.writeln("            		<li>");
document.writeln("            			<a id=\'btn_l_d5\' href=\'#\'>游戏<i class=\'arrow arrow8 fa fa-angle-down\'></i></a>");
document.writeln("            			<span id=\'sp\'>");
document.writeln("            				<span  class=\'left_select left_select5\'>");
document.writeln("            					<p><a class=\'text-primary\' href=\'#\'><img src=\'images/home_img/logo-mobile-ow.png\' alt=\'\' />《守望先锋<sup>®</sup>》</a></p>");
document.writeln("            					<p><a class=\'text-primary\' href=\'#\'><img src=\'images/home_img/logo-mobile-wow.png\' alt=\'\' />《魔兽世界<sup>®</sup>》</a></p>");
document.writeln("            					<p><a class=\'text-primary\' href=\'#\'><img src=\'images/home_img/logo-mobile-hs.png\' alt=\'\' />《炉石传说<sup>®</sup>》</a></p>");
document.writeln("            					<p><a class=\'text-primary\' href=\'#\'><img src=\'images/home_img/logo-mobile-heroes.png\' alt=\'\' />《风暴英雄<sup>™</sup>》</a></p>");
document.writeln("            					<p><a class=\'text-primary\' href=\'#\'><img src=\'images/home_img/logo-mobile-w3r.png\' alt=\'\' />《魔兽争霸<sup>®</sup>III:重置版<sup>™</sup>》</a></p>");
document.writeln("            					<p><a class=\'text-primary\' href=\'#\'><img src=\'images/home_img/logo-mobile-di.png\' alt=\'\' />《黑暗破坏神<sup>®</sup>不朽<sup>™</sup>》</a></p>");
document.writeln("            					<p><a class=\'text-primary\' href=\'#\'><img src=\'images/home_img/logo-mobile-d3.png\' alt=\'\' />《黑暗破坏神<sup>®</sup>III》</a></p>");
document.writeln("            					<p><a class=\'text-primary\' href=\'#\'><img src=\'images/home_img/logo-mobile-sc2.png\' alt=\'\' />《星际争霸<sup>®</sup>II》</a></p>");
document.writeln("            					<p><a class=\'text-primary\' href=\'#\'><img src=\'images/home_img/logo-mobile-scr.png\' alt=\'\' />《星际争霸:重制版》</a></p>");
document.writeln("            				</span>");
document.writeln("            			</span>");
document.writeln("            		</li>");
document.writeln("            		<li><a href=\'#\'>商城</a></li>");
document.writeln("            		<li><a href=\'#\'>新闻</a></li>");
document.writeln("            		<li>");
document.writeln("            			<a id=\'btn_l_d6\' href=\'#\'>电子竞技 <i class=\'arrow arrow9 fa fa-angle-down\'></i></a>");
document.writeln("            			<span id=\'sp\'>");
document.writeln("            				<span  class=\'left_select left_select6\'>");
document.writeln("            					<p>");
document.writeln("            						<a  class=\'text-primary\' href=\'#\'>守望先锋电竞</a>");
document.writeln("            						<a class=\'text-primary px-5\' href=\'#\'>-守望先锋联赛</a>");
document.writeln("            						<a class=\'text-primary px-5\' href=\'#\'>-守望先锋世界杯</a>");
document.writeln("            						<a class=\'text-primary px-5\' href=\'#\'>-守望先锋挑战者系列赛</a>");
document.writeln("            						<a  class=\'text-primary\' href=\'#\'>炉石传说黄金系列 赛</a>");
document.writeln("            						<a  class=\'text-primary\' href=\'#\'>黄金风暴联赛</a>");
document.writeln("            						<a  class=\'text-primary\' href=\'#\'>星际争霸II黄金职业赛</a>");
document.writeln("            						<a  class=\'text-primary\' href=\'#\'>魔兽争霸III黄金联赛</a>");
document.writeln("            						<a class=\' text-primary\' href=\'#\'><i  class=\'fa fa-th text-white\'></i> 更多赛事</a>");
document.writeln("            						<a class=\' text-primary\' href=\'#\'><i  class=\'fa fa-trophy text-white\'></i> 申请暴雪电竞赛事授权</a>");
document.writeln("            					</p>");
document.writeln("            				</span>");
document.writeln("            			</span>");
document.writeln("            		</li>");
document.writeln("            		<li><a href=\'#\'>暴雪年华</a></li>");
document.writeln("            	</ul>");
document.writeln("            </div>");
document.writeln("	</div> ");
document.writeln("	<!--游戏下拉菜单-->");
document.writeln("	<div id=\'\' class=\'select_g1\'>");
document.writeln("		<div id=\'select_g1\' class=\'bg-dark\'>");
document.writeln("		<ul class=\'d-flex justify-content-around text-center list-unstyled\'>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/logo-ow.png\' alt=\'\' /><p>《守望先锋<sup>®</sup>》</p></a></li>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/logo-wow.png\' alt=\'\' /><p>《魔兽世界<sup>®</sup>》</p></a></li>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/logo-hs.png\' alt=\'\' /><p>《炉石传说<sup>®</sup>》</p></a></li>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/logo-heroes.png\' alt=\'\' /><p>《风暴英雄<sup>™</sup>》</p></a></li>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/logo-w3r.png\' alt=\'\' /><p>《魔兽争霸<sup>®</sup>III:重置版<sup>™</sup>》</p></a></li>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/logo-di.png\' alt=\'\' /><p>《黑暗破坏神<sup>®</sup>不朽<sup>™</sup>》</p></a></li>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/logo-d3.png\' alt=\'\' /><p>《黑暗破坏神<sup>®</sup>III》</p></a></li>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/logo-sc2.png\' alt=\'\' /><p>《星际争霸<sup>®</sup>II》</p></a></li>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/logo-scr.png\' alt=\'\' /><p>《星际争霸:重制版》</p></a></li>");
document.writeln("		</ul>");
document.writeln("	</div>");
document.writeln("	");
document.writeln("	<!--大屏-->");
document.writeln("	<div id=\'select_g2\' class=\'bg-dark\'>");
document.writeln("		<table></table>");
document.writeln("		<ul id=\'ul1\' class=\'d-flex justify-content-around text-center list-unstyled\'>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/card-overwatch-CN-85c98611cefd3018.jpg\' alt=\'\' /></a></li>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/card-world-of-warcraft-CN-c4bebe45e5af0993.jpg\' alt=\'\' /></a></li>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/card-hearthstone-CN-538b49564ab2122a.jpg\' alt=\'\' /></a></li>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/card-heroes-of-the-storm-CN-bacafbbddcf92348.jpg\' alt=\'\' /></a></li>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/card-warcraft-3-reforged-CN.jpg\' alt=\'\' /></a></li>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/card-diablo-immortal-CN.jpg\' alt=\'\' /></a></li>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/card-diablo-3-CN-0d57444efa52a79b.jpg\' alt=\'\' /></a></li>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/card-starcraft-2-CN-de310c5ddfb63a49.jpg\' alt=\'\' /></a></li>");
document.writeln("			<li><a href=\'#\'><img src=\'images/home_img/card-starcraft-remastered-CN.jpg\' alt=\'\' /></a></li>");
document.writeln("		</ul>");
document.writeln("		<table></table>");
document.writeln("	</div>");
document.writeln("	</div>");
document.writeln("	<!--电子竞技下拉-->");
document.writeln("	<div class=\'select_d\'>");
document.writeln("		<div id=\'select_d1\'>");
document.writeln("			<ul class=\'list-unstyled text-center\'>");
document.writeln("				<li id=\'asid_curo\' class=\'li_top2\'>");
document.writeln("					<a href=\'#\'><img src=\'images/home_img/esports-ow.png\'/><p>守望先锋电竞</p></a>");
document.writeln("				</li>");
document.writeln("				<li id=\'asid_img\' class=\'asid_img\'>");
document.writeln("						<span>");
document.writeln("							<a href=\'#\'><img src=\'images/home_img/esports-overwatch.png\'/></a>");
document.writeln("						</span>");
document.writeln("						<span>");
document.writeln("							<a href=\'#\'><img src=\'images/home_img/esports-overwatch-world-cup.png\'/></a>");
document.writeln("						</span>");
document.writeln("						<span>");
document.writeln("							<a href=\'#\'><img src=\'images/home_img/esports-contenders.png\'/></a>");
document.writeln("						</span>");
document.writeln("				</li>");
document.writeln("				<li id=\'asid_curo1\'><a href=\'#\'><img src=\'images/home_img/hs-logo.png\'/><p>守望先锋电竞</p></a></li>");
document.writeln("				<li id=\'asid_img\' class=\'asid_img1\'>");
document.writeln("						<span>");
document.writeln("							<a href=\'#\'><img src=\'images/home_img/hs-hjgks.png\'/></a>");
document.writeln("						</span>");
document.writeln("						<span>");
document.writeln("							<a href=\'#\'><img src=\'images/home_img/hs-hjzdls.png\'/></a>");
document.writeln("						</span>");
document.writeln("						<span>");
document.writeln("							<a href=\'#\'><img src=\'images/home_img/hs-dss.png\'/></a>");
document.writeln("						</span>");
document.writeln("				</li>");
document.writeln("				<li id=\'asid_curo2\'><a href=\'#\'><img src=\'images/home_img/heroes-logo.png\'/><p>守望先锋电竞</p></a></li>");
document.writeln("				<li id=\'asid_img\' class=\'asid_img2\'>");
document.writeln("						<span>");
document.writeln("							<a href=\'#\'><img src=\'images/home_img/heroes-hjfbls.png\'/></a>");
document.writeln("						</span>");
document.writeln("				</li>");
document.writeln("				<li id=\'asid_curo3\'><a href=\'#\'><img src=\'images/home_img/esports-sc2-wcs.png\'/><p>守望先锋电竞</p></a></li>");
document.writeln("				<li id=\'asid_img\' class=\'asid_img3\'>");
document.writeln("						<span>");
document.writeln("							<a href=\'#\'><img src=\'images/home_img/sc2-hjjbs.png\'/></a>");
document.writeln("						</span>");
document.writeln("						<span>");
document.writeln("							<a href=\'#\'><img src=\'images/home_img/sc2-hjcjls.png\'/></a>");
document.writeln("						</span>");
document.writeln("						<span>");
document.writeln("							<a href=\'#\'><img src=\'images/home_img/esports-sc2-wcs.png\'/></a>");
document.writeln("						</span>");
document.writeln("				</li>");
document.writeln("				<li id=\'asid_curo4\'><a href=\'#\'><img src=\'images/home_img/wariii.png\'/><p>守望先锋电竞</p></a></li>");
document.writeln("				<li id=\'asid_img\' class=\'asid_img4\'>");
document.writeln("						<span>");
document.writeln("							<a href=\'#\'><img src=\'images/home_img/war3-hjls.png\'/></a>");
document.writeln("						</span>");
document.writeln("						<span>");
document.writeln("							<a href=\'#\'><img src=\'images/home_img/war3-hjcjls.png\'/></a>");
document.writeln("						</span>");
document.writeln("				</li>");
document.writeln("				<li id=\'asid_curo5\'><a href=\'#\'><img src=\'images/home_img/wow-logo.png\'/><p>守望先锋电竞</p></a></li>");
document.writeln("				<li id=\'asid_img\' class=\'asid_img5\'>");
document.writeln("						<span>");
document.writeln("							<a href=\'#\'><img src=\'images/home_img/wow-ssysdxc.png\'/></a>");
document.writeln("						</span>");
document.writeln("						<span>");
document.writeln("							<a href=\'#\'><img src=\'images/home_img/wow-jjcsjjbs.png\'/></a>");
document.writeln("						</span>");
document.writeln("				</li>");
document.writeln("			</ul>");
document.writeln("		</div>");
document.writeln("		<div class=\'bottom_s text-center\'>");
document.writeln("				<a href=\'#\'><i  class=\'fa fa-th text-primary\'></i> 更多赛事</a>");
document.writeln("				<a href=\'#\'><i  class=\'fa fa-trophy text-primary\'></i> 申请暴雪电竞赛事授权</a>");
document.writeln("		</div>");
document.writeln("	</div>");
document.writeln("	<!--通行证下拉-->");
document.writeln("	<div class=\'reg_login\'>");
document.writeln("		<ul class=\'list-unstyled\'>");
document.writeln("			<li><a href=\'#\' class=\'bg-primary\'>登录</a></li>");
document.writeln("			<li><a href=\'#\'><i class=\'fa fa-cog text-primary\'></i> 账户</a></li>");
document.writeln("            <li><a href=\'#\'><i class=\'fa fa-user-plus text-primary\'></i> 注册</a></li>");
document.writeln("		</ul>");
document.writeln("	</div>");
document.writeln("	<!--第二导航栏 -->");
document.writeln("	<div class=\'container-fluid p-0 m-0 d-none d-md-block\' id=\'top_nav2\'>");
document.writeln("		<a href=\'#\' id=\'nav_log\'></a>");
document.writeln("		<ul class=\'list-unstyled\'>");
document.writeln("			<li class=\'btn_two\'>");
document.writeln("				<a href=\'javascript:void(0);\'>游戏 <span class=\'fa fa-angle-down\'></span></a>");
document.writeln("				<span>");
document.writeln("					<p><a href=\'#\'>概述</a></p>");
document.writeln("					<p><a href=\'#\'>赞赏系统</a></p>");
document.writeln("				</span>");
document.writeln("			</li>");
document.writeln("			<li><a href=\'#\'>英雄</a></li>");
document.writeln("			<li class=\'btn_two\'>");
document.writeln("				<a href=\'javascript:void(0);\'>活动 <span class=\'fa fa-angle-down\'></span></a>");
document.writeln("				<span>");
document.writeln("					<p><a href=\'#\'>夏季运动会</a></p>");
document.writeln("					<p><a href=\'#\'>行动档案</a></p>");
document.writeln("					<p><a href=\'#\'>欢度新春</a></p>");
document.writeln("					<p><a href=\'#\'>雪国仙境</a></p>");
document.writeln("					<p><a href=\'#\'>万圣夜惊魂</a></p>");
document.writeln("					<p><a href=\'#\'>周年庆典</a></p>");
document.writeln("				</span>");
document.writeln("			</li>");
document.writeln("			<li><a href=\'#\'>视频图片</a></li>");
document.writeln("			<li class=\'btn_two\'>");
document.writeln("				<a href=\'javascript:void(0);\'>新闻 <span class=\'fa fa-angle-down\'></span></a>");
document.writeln("				<span>");
document.writeln("					<p><a href=\'#\'>新闻</a></p>");
document.writeln("					<p><a href=\'#\'>补丁</a></p>");
document.writeln("				</span>");
document.writeln("			</li>");
document.writeln("			<li><a href=\'javascript:void(0);\'>下载</a></li>");
document.writeln("			<li class=\'btn_two\'>");
document.writeln("				<a href=\'javascript:void(0);\'>电子竞技 <span class=\'fa fa-angle-down\'></span></a>");
document.writeln("				<span>");
document.writeln("					<p><a href=\'#\'>概述</a></p>");
document.writeln("					<p><a href=\'#\'>守望先锋公开争霸赛</a></p>");
document.writeln("					<p><a href=\'#\'>守望先锋挑战者选拔赛</a></p>");
document.writeln("					<p><a href=\'#\'>守望先锋挑战者系列赛</a></p>");
document.writeln("					<p><a href=\'#\'>守望先锋联赛</a></p>");
document.writeln("				</span>");
document.writeln("			</li>");
document.writeln("			<li class=\'btn_two\'>");
document.writeln("				<a href=\'javascript:void(0);\'>社区 <span class=\'fa fa-angle-down\'></span></a>");
document.writeln("				<span>");
document.writeln("					<p><a href=\'#\'>生涯数据</a></p>");
document.writeln("					<p><a href=\'#\'>我们身边的英雄</a></p>");
document.writeln("					<p><a href=\'#\'>论坛</a></p>");
document.writeln("				</span>");
document.writeln("			</li>");
document.writeln("		</ul>");
document.writeln("		<a href=\'#\' class=\'bottom_shimg\'>购买</a>");
document.writeln("	</div>");
document.writeln("	<script src=\'swxfJS/herder.js\'></script>");
document.writeln("	</body>");
document.writeln("</html>");
document.writeln("");