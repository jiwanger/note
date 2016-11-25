<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<meta name="keywords" content="key1, key2" />
<meta name="description" content=””>
<meta name="author" content="nate">
<meta name="author" content="nate &lt;jiwanger@126.com&gt;">
<link href="images/favicon.ico" rel="bookmark" type="image/x-icon" />
<link href="images/favicon.ico" rel="icon" type="image/x-icon" />
<link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
<title>NATE--笔记--HTML</title>
<!-- Bootstrap -->
<link href="../support/bootstrap/theme/yeti-bootstrap.min.css"
	rel="stylesheet">
<!-- 
<link href="../support/bootstrap/css/bootstrap.css" rel="stylesheet">
-->
<link type="text/css" rel="stylesheet"
	href="../support/syntaxhighlighter/styles/shCoreDefault.css" />
<link href="../commons/css/common.css" rel="stylesheet">
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
	<!-- nav start -->
	<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target="#bs-example-navbar-collapse-1">
					<span class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="../index.html">
					<img src="../commons/images/icon.png">
				</a>
			</div>

			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul id="my-nav" class="nav navbar-nav">

				</ul>
			</div>
		</div>
	</nav>
	<!-- nav end -->


	<div class="container">
		<div class="row">
			<!-- left-menu start -->
			<div class="col-md-3">
				<div id="my-scrollbar" class="panel panel-default"
					style="position: fixed; top: 70px; width: 260px; height: 85%; overflow: auto;">
					<div class="panel-heading" style="border-bottom: 1px solid #DDD;">
						<h3 class="panel-title">HTML</h3>
					</div>
					<div class="list-group">
						<a href="#" class="list-group-item">简介</a>
						<a class="list-group-item active dropdown" data-toggle="collapse"
							data-parent="#accordion" href="#html-manual" aria-expanded="true">
							参考手册<span class="caret pull-right" style="margin-top: 5px;"></span>
						</a>
						<div id="html-manual" class="panel-collapse collapse"
							role="tabpanel">
							<a href="#html-tag" class="list-group-item">标签列表</a>
							<a href="#html-global" class="list-group-item">全局属性</a>
							<a href="#html-event" class="list-group-item">事件</a>
							<a href="#html-canvas" class="list-group-item">画布</a>
							<a href="#html-media" class="list-group-item">音频 / 视频</a>
							<a href="#html-doctypes" class="list-group-item">DOCTYPES</a>
							<a href="#html-color" class="list-group-item">颜色名</a>
							<a href="#html-color-getter" class="list-group-item">拾色器</a>
							<a href="#html-charset" class="list-group-item">字符集</a>
							<a href="#html-ascii" class="list-group-item">ASCII</a>
							<a href="#html-iso-8859-1" class="list-group-item">ISO-8859-1</a>
							<a href="#html-symbol" class="list-group-item">符号</a>
							<a href="#html-encode" class="list-group-item">URL 编码</a>
							<a href="#html-lang" class="list-group-item">语言代码</a>
							<a href="#html-message" class="list-group-item">消息</a>
							<a href="#html-method" class="list-group-item">方法</a>
							<a href="#html-px-em" class="list-group-item">Px / Em 换算工具</a>
							<a href="#html-key" class="list-group-item">键盘快捷键</a>
						</div>
						<a href="#java-class-loader" class="list-group-item">...</a>
					</div>
				</div>
			</div>
			<!-- left-menu over -->
		</div>
	</div>

	<div class="container" style="margin-top: 70px;">
		<div class="row">
			<div class="col-md-9 col-md-push-3" style="float: left;">
				<!-- item start -->
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">简介</h3>
					</div>
					<div class="panel-body"></div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-tag" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">标签列表</h3>
					</div>
					<div class="panel-body">

						<h5 class="text-primary">
							HTML 参考手册- <span class="text-success">(HTML5 标准)</span>
						</h5>

						<h6 class="text-primary">按功能排序</h6>
						<p>
							<span class="badge">New</span>&nbsp;: HTML5新标签
						</p>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th width="25%" align="left">标签</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td><b>基础</b></td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><a href="tag-doctype.html">&lt;!DOCTYPE&gt;</a>&nbsp;</td>
									<td>定义文档类型。</td>
								</tr>
								<tr>
									<td><a href="tag-html.html">&lt;html&gt;</a></td>
									<td>定义一个 HTML 文档</td>
								</tr>
								<tr>
									<td><a href="tag-title.html">&lt;title&gt;</a></td>
									<td>为文档定义一个标题</td>
								</tr>
								<tr>
									<td><a href="tag-body.html">&lt;body&gt;</a></td>
									<td>定义文档的主体</td>
								</tr>
								<tr>
									<td><a href="tag-hn.html">&lt;h1&gt; to &lt;h6&gt;</a></td>
									<td>定义 HTML 标题</td>
								</tr>
								<tr>
									<td><a href="tag-p.html">&lt;p&gt;</a></td>
									<td>定义一个段落</td>
								</tr>
								<tr>
									<td><a href="tag-br.html">&lt;br&gt;</a></td>
									<td>定义简单的折行。</td>
								</tr>
								<tr>
									<td><a href="tag-hr.html">&lt;hr&gt;</a></td>
									<td>定义水平线。</td>
								</tr>
								<tr>
									<td><a href="tag-comment.html">&lt;!--...--&gt;</a></td>
									<td>定义一个注释</td>
								</tr>
								<tr>
									<td><b>格式</b></td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><a class="text-warning" href="tag-acronym.html">&lt;acronym&gt;</a></td>
									<td><span class="text-danger">HTML5不再支持。</span>
										定义只取首字母的缩写。</td>
								</tr>
								<tr>
									<td><a href="tag-abbr.html">&lt;abbr&gt;</a></td>
									<td>定义一个缩写。</td>
								</tr>
								<tr>
									<td><a href="tag-address.html">&lt;address&gt;</a></td>
									<td>定义文档作者或拥有者的联系信息。</td>
								</tr>
								<tr>
									<td><a href="tag-b.html">&lt;b&gt;</a></td>
									<td>定义粗体文本。</td>
								</tr>
								<tr>
									<td><a href="tag-bdi.html">&lt;bdi&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>允许您设置一段文本，使其脱离其父元素的文本方向设置。</td>
								</tr>
								<tr>
									<td><a href="tag-bdo.html">&lt;bdo&gt;</a></td>
									<td>定义文本的方向。</td>
								</tr>
								<tr>
									<td><a class="text-warning" href="tag-big.html">&lt;big&gt;</a></td>
									<td><span class="text-danger">HTML5不再支持。</span> 定义大号文本。</td>
								</tr>
								<tr>
									<td><a href="tag-blockquote.html">&lt;blockquote&gt;</a></td>
									<td>定义块引用。</td>
								</tr>
								<tr>
									<td><a class="text-warning" href="tag-center.html">&lt;center&gt;</a></td>
									<td><span class="text-danger">HTML5不再支持。 HTML 4.01
											已废弃。</span>定义居中文本。</td>
								</tr>
								<tr>
									<td><a href="tag-cite.html">&lt;cite&gt;</a></td>
									<td>定义引用(citation)。</td>
								</tr>
								<tr>
									<td><a href="tag-code.html">&lt;code&gt;</a></td>
									<td>定义计算机代码文本。</td>
								</tr>
								<tr>
									<td><a href="tag-del.html">&lt;del&gt;</a></td>
									<td>定义被删除文本。</td>
								</tr>
								<tr>
									<td><a href="tag-dfn.html">&lt;dfn&gt;</a></td>
									<td>定义定义项目。</td>
								</tr>
								<tr>
									<td><a href="tag-em.html">&lt;em&gt;</a></td>
									<td>定义强调文本。&nbsp;</td>
								</tr>
								<tr>
									<td><a class="text-warning" href="tag-font.html">&lt;font&gt;</a></td>
									<td><span class="text-danger">HTML5不再支持。 HTML 4.01
											已废弃。</span> 定义文本的字体、尺寸和颜色</td>
								</tr>
								<tr>
									<td><a href="tag-i.html">&lt;i&gt;</a></td>
									<td>定义斜体文本。</td>
								</tr>
								<tr>
									<td><a href="tag-ins.html">&lt;ins&gt;</a></td>
									<td>定义被插入文本。</td>
								</tr>
								<tr>
									<td><a href="tag-kbd.html">&lt;kbd&gt;</a></td>
									<td>定义键盘文本。</td>
								</tr>
								<tr>
									<td><a href="tag-mark.html">&lt;mark&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义带有记号的文本。</td>
								</tr>
								<tr>
									<td><a href="tag-meter.html">&lt;meter&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义度量衡。仅用于已知最大和最小值的度量。</td>
								</tr>
								<tr>
									<td><a href="tag-pre.html">&lt;pre&gt;</a></td>
									<td>定义预格式文本</td>
								</tr>
								<tr>
									<td><a href="tag-progress.html">&lt;progress&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义运行中的任务进度（进程）。</td>
								</tr>
								<tr>
									<td><a href="tag-q.html">&lt;q&gt;</a></td>
									<td>定义短的引用。</td>
								</tr>
								<tr>
									<td><a href="tag-rp.html">&lt;rp&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义不支持 ruby 元素的浏览器所显示的内容。</td>
								</tr>
								<tr>
									<td><a href="tag-rt.html">&lt;rt&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义字符（中文注音或字符）的解释或发音。</td>
								</tr>
								<tr>
									<td><a href="tag-ruby.html">&lt;ruby&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义 ruby 注释（中文注音或字符）。</td>
								</tr>
								<tr>
									<td><a href="tag-s.html">&lt;s&gt;</a></td>
									<td>定义加删除线的文本。</td>
								</tr>
								<tr>
									<td><a href="tag-samp.html">&lt;samp&gt;</a></td>
									<td>定义计算机代码样本。</td>
								</tr>
								<tr>
									<td><a href="tag-small.html">&lt;small&gt;</a></td>
									<td>定义小号文本。</td>
								</tr>
								<tr>
									<td><a class="text-warning" href="tag-strike.html">&lt;strike&gt;</a></td>
									<td><span class="text-danger">HTML5不再支持。 HTML 4.01
											已废弃。</span> 定义加删除线的文本。</td>
								</tr>
								<tr>
									<td><a href="tag-strong.html">&lt;strong&gt;</a></td>
									<td>定义语气更为强烈的强调文本。</td>
								</tr>
								<tr>
									<td><a href="tag-sub.html">&lt;sub&gt;</a></td>
									<td>定义下标文本。</td>
								</tr>
								<tr>
									<td><a href="tag-sup.html">&lt;sup&gt;</a></td>
									<td>定义上标文本。</td>
								</tr>
								<tr>
									<td><a href="tag-time.html">&lt;time&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义一个日期/时间</td>
								</tr>
								<tr>
									<td><a class="text-warning" href="tag-tt.html">&lt;tt&gt;</a></td>
									<td><span class="text-danger">HTML5不再支持。</span> 定义打字机文本。</td>
								</tr>
								<tr>
									<td><a href="tag-u.html">&lt;u&gt;</a></td>
									<td>定义下划线文本。</td>
								</tr>
								<tr>
									<td><a href="tag-var.html">&lt;var&gt;</a></td>
									<td>定义文本的变量部分。</td>
								</tr>
								<tr>
									<td><a href="tag-wbr.html">&lt;wbr&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>规定在文本中的何处适合添加换行符。</td>
								</tr>
								<tr>
									<td><b>表单</b></td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><a href="tag-form.html">&lt;form&gt;</a></td>
									<td>定义一个 HTML 表单，用于用户输入。</td>
								</tr>
								<tr>
									<td><a href="tag-input.html">&lt;input&gt;</a></td>
									<td>定义一个输入控件</td>
								</tr>
								<tr>
									<td><a href="tag-textarea.html">&lt;textarea&gt;</a></td>
									<td>定义多行的文本输入控件。</td>
								</tr>
								<tr>
									<td><a href="tag-button.html">&lt;button&gt;</a></td>
									<td>定义按钮。</td>
								</tr>
								<tr>
									<td><a href="tag-select.html">&lt;select&gt;</a></td>
									<td>定义选择列表（下拉列表）。</td>
								</tr>
								<tr>
									<td><a href="tag-optgroup.html">&lt;optgroup&gt;</a></td>
									<td>定义选择列表中相关选项的组合。</td>
								</tr>
								<tr>
									<td><a href="tag-option.html">&lt;option&gt;</a></td>
									<td>定义选择列表中的选项。</td>
								</tr>
								<tr>
									<td><a href="tag-label.html">&lt;label&gt;</a></td>
									<td>定义 input 元素的标注。</td>
								</tr>
								<tr>
									<td><a href="tag-fieldset.html">&lt;fieldset&gt;</a></td>
									<td>定义围绕表单中元素的边框。</td>
								</tr>
								<tr>
									<td><a href="tag-legend.html">&lt;legend&gt;</a></td>
									<td>定义 fieldset 元素的标题。</td>
								</tr>
								<tr>
									<td><a href="tag-datalist.html">&lt;datalist&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>规定了 input 元素可能的选项列表。</td>
								</tr>
								<tr>
									<td><a href="tag-keygen.html">&lt;keygen&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>规定用于表单的密钥对生成器字段。</td>
								</tr>
								<tr>
									<td><a href="tag-output.html">&lt;output&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义一个计算的结果</td>
								</tr>
								<tr>
									<td><b>框架</b></td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><a class="text-warning" href="tag-frame.html">&lt;frame&gt;</a></td>
									<td><span class="text-danger">HTML5不再支持。</span>
										定义框架集的窗口或框架。</td>
								</tr>
								<tr>
									<td><a class="text-warning" href="tag-frameset.html">&lt;frameset&gt;</a></td>
									<td><span class="text-danger">HTML5不再支持。</span>定义框架集。</td>
								</tr>
								<tr>
									<td><a class="text-warning" href="tag-noframes.html">&lt;noframes&gt;</a></td>
									<td><span class="text-danger">HTML5不再支持。</span>
										定义针对不支持框架的用户的替代内容。</td>
								</tr>
								<tr>
									<td><a href="tag-iframe.html">&lt;iframe&gt;</a></td>
									<td>定义内联框架。</td>
								</tr>
								<tr>
									<td><b>图像</b></td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><a href="tag-img.html">&lt;img&gt;</a></td>
									<td>定义图像。</td>
								</tr>
								<tr>
									<td><a href="tag-map.html">&lt;map&gt;</a></td>
									<td>定义图像映射。</td>
								</tr>
								<tr>
									<td><a href="tag-area.html">&lt;area&gt;</a></td>
									<td>定义图像地图内部的区域。</td>
								</tr>
								<tr>
									<td><a href="tag-canvas.html">&lt;canvas&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>通过脚本（通常是 JavaScript）来绘制图形（比如图表和其他图像）。</td>
								</tr>
								<tr>
									<td><a href="tag-figcaption.html">&lt;figcaption&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义一个 caption for a &lt;figure&gt; element</td>
								</tr>
								<tr>
									<td><a href="tag-figure.html">&lt;figure&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>figure 标签用于对元素进行组合。</td>
								</tr>
								<tr>
									<td><b>Audio/Video</b></td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><a href="tag-audio.html">&lt;audio&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义声音，比如音乐或其他音频流。</td>
								</tr>
								<tr>
									<td><a href="tag-source.html">&lt;source&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义media元素 (&lt;video&gt; 和 &lt;audio&gt;)的媒体资源。media</td>
								</tr>
								<tr>
									<td><a href="tag-track.html">&lt;track&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>为媒体(&lt;video&gt; 和 &lt;audio&gt;)元素定义外部文本轨道。</td>
								</tr>
								<tr>
									<td><a href="tag-video.html">&lt;video&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义一个音频或者视频</td>
								</tr>
								<tr>
									<td><b>链接</b></td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><a href="tag-a.html">&lt;a&gt;</a></td>
									<td>定义一个链接</td>
								</tr>
								<tr>
									<td><a href="tag-link.html">&lt;link&gt;</a></td>
									<td>定义文档与外部资源的关系。</td>
								</tr>
								<tr>
									<td><a href="tag-nav.html">&lt;nav&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义导航链接</td>
								</tr>
								<tr>
									<td><b>列表</b></td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><a href="tag-ul.html">&lt;ul&gt;</a></td>
									<td>定义一个无序列表</td>
								</tr>
								<tr>
									<td><a href="tag-ol.html">&lt;ol&gt;</a></td>
									<td>定义一个有序列表</td>
								</tr>
								<tr>
									<td><a href="tag-li.html">&lt;li&gt;</a></td>
									<td>定义一个列表项</td>
								</tr>
								<tr>
									<td><a class="text-warning" href="tag-dir.html">&lt;dir&gt;</a></td>
									<td><span class="text-danger">HTML5不再支持。 HTML 4.01
											已废弃。</span> 定义目录列表。</td>
								</tr>
								<tr>
									<td><a href="tag-dl.html">&lt;dl&gt;</a></td>
									<td>定义一个定义列表</td>
								</tr>
								<tr>
									<td><a href="tag-dt.html">&lt;dt&gt;</a></td>
									<td>定义一个定义定义列表中的项目。</td>
								</tr>
								<tr>
									<td><a href="tag-dd.html">&lt;dd&gt;</a></td>
									<td>定义定义列表中项目的描述。</td>
								</tr>
								<tr>
									<td><a href="tag-menu.html">&lt;menu&gt;</a></td>
									<td>定义菜单列表。</td>
								</tr>
								<tr>
									<td><a href="tag-command.html">&lt;command&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义用户可能调用的命令（比如单选按钮、复选框或按钮）。</td>
								</tr>
								<tr>
									<td><b>表格</b></td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><a href="tag-table.html">&lt;table&gt;</a></td>
									<td>定义一个表格</td>
								</tr>
								<tr>
									<td><a href="tag-caption.html">&lt;caption&gt;</a></td>
									<td>定义表格标题。</td>
								</tr>
								<tr>
									<td><a href="tag-th.html">&lt;th&gt;</a></td>
									<td>定义表格中的表头单元格。</td>
								</tr>
								<tr>
									<td><a href="tag-tr.html">&lt;tr&gt;</a></td>
									<td>定义表格中的行。</td>
								</tr>
								<tr>
									<td><a href="tag-td.html">&lt;td&gt;</a></td>
									<td>定义表格中的单元。</td>
								</tr>
								<tr>
									<td><a href="tag-thead.html">&lt;thead&gt;</a></td>
									<td>定义表格中的表头内容。</td>
								</tr>
								<tr>
									<td><a href="tag-tbody.html">&lt;tbody&gt;</a></td>
									<td>定义表格中的主体内容。</td>
								</tr>
								<tr>
									<td><a href="tag-tfoot.html">&lt;tfoot&gt;</a></td>
									<td>定义表格中的表注内容（脚注）。</td>
								</tr>
								<tr>
									<td><a href="tag-col.html">&lt;col&gt;</a></td>
									<td>定义表格中一个或多个列的属性值。</td>
								</tr>
								<tr>
									<td><a href="tag-colgroup.html">&lt;colgroup&gt;</a></td>
									<td>定义表格中供格式化的列组。</td>
								</tr>
								<tr>
									<td><b>样式/节</b></td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><a href="tag-style.html">&lt;style&gt;</a></td>
									<td>定义文档的样式信息。</td>
								</tr>
								<tr>
									<td><a href="tag-div.html">&lt;div&gt;</a></td>
									<td>定义文档中的节。</td>
								</tr>
								<tr>
									<td><a href="tag-span.html">&lt;span&gt;</a></td>
									<td>定义文档中的节。</td>
								</tr>
								<tr>
									<td><a href="tag-header.html">&lt;header&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义一个文档头部部分</td>
								</tr>
								<tr>
									<td><a href="tag-footer.html">&lt;footer&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义一个文档底部</td>
								</tr>
								<tr>
									<td><a href="tag-section.html">&lt;section&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义了文档的某个区域</td>
								</tr>
								<tr>
									<td><a href="tag-article.html">&lt;article&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义一个文章内容</td>
								</tr>
								<tr>
									<td><a href="tag-aside.html">&lt;aside&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义其所处内容之外的内容。</td>
								</tr>
								<tr>
									<td><a href="tag-details.html">&lt;details&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义了用户可见的或者隐藏的需求的补充细节。</td>
								</tr>
								<tr>
									<td><a href="tag-dialog.html">&lt;dialog&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义一个对话框或者窗口</td>
								</tr>
								<tr>
									<td><a href="tag-summary.html">&lt;summary&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义一个可见的标题。 当用户点击标题时会显示出详细信息。</td>
								</tr>
								<tr>
									<td><b>元信息</b></td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><a href="tag-head.html">&lt;head&gt;</a></td>
									<td>定义关于文档的信息</td>
								</tr>
								<tr>
									<td><a href="tag-meta.html">&lt;meta&gt;</a></td>
									<td>定义关于 HTML 文档的元信息。</td>
								</tr>
								<tr>
									<td><a href="tag-base.html">&lt;base&gt;</a></td>
									<td>定义页面中所有链接的默认地址或默认目标。</td>
								</tr>
								<tr>
									<td><a class="text-warning" href="tag-basefont.html">&lt;basefont&gt;</a></td>
									<td><span class="text-danger">HTML5不再支持。 HTML 4.01
											已废弃。</span> 定义页面中文本的默认字体、颜色或尺寸。</td>
								</tr>
								<tr>
									<td><b>程序</b></td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><a href="tag-script.html">&lt;script&gt;</a></td>
									<td>定义客户端脚本。</td>
								</tr>
								<tr>
									<td><a href="tag-noscript.html">&lt;noscript&gt;</a></td>
									<td>定义针对不支持客户端脚本的用户的替代内容。</td>
								</tr>
								<tr>
									<td><a class="text-warning" href="tag-applet.html">&lt;applet&gt;</a></td>
									<td><span class="text-danger">HTML5不再支持。 HTML 4.01
											已废弃。</span> 定义嵌入的 applet。</td>
								</tr>
								<tr>
									<td><a href="tag-embed.html">&lt;embed&gt;</a><span
										class="badge pull-right">New</span></td>
									<td>定义了一个容器，用来嵌入外部应用或者互动程序（插件）。</td>
								</tr>
								<tr>
									<td><a href="tag-object.html">&lt;object&gt;</a></td>
									<td>定义嵌入的对象。</td>
								</tr>
								<tr>
									<td><a href="tag-param.html">&lt;param&gt;</a></td>
									<td>定义对象的参数。</td>
								</tr>
							</tbody>
						</table>

					</div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-global" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">全局属性</h3>
					</div>
					<div class="panel-body">
						<p>
							<span class="badge">New</span>&nbsp;: HTML5新标签
						</p>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com">
							<tbody>
								<tr>
									<th width="25%" align="left">属性</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td><a href="/tags/att-global-accesskey.html"
											title="HTML Global accesskey 属性">accesskey</a></td>
									<td>设置访问元素的键盘快捷键。</td>
								</tr>
								<tr>
									<td><a href="/tags/att-global-class.html"
											title="HTML Global class 属性">class</a></td>
									<td>规定元素的类名（classname）</td>
								</tr>
								<tr>
									<td><a href="/tags/att-global-contenteditable.html"
											title="HTML Global contenteditable 属性">contenteditable</a><span
										class="badge pull-right">New</span></td>
									<td>规定是否可编辑元素的内容。</td>
								</tr>
								<tr>
									<td><a href="/tags/att-global-contextmenu.html"
											title="HTML contextmenu 属性">contextmenu</a><span
										class="badge pull-right">New</span></td>
									<td>指定一个元素的上下文菜单。当用户右击该元素，出现上下文菜单</td>
								</tr>
								<tr>
									<td><a href="att-global-data.html">data-*</a><span
										class="badge pull-right">New</span></td>
									<td>用于存储页面的自定义数据</td>
								</tr>
								<tr>
									<td><a href="/tags/att-global-dir.html"
											title="HTML dir 属性">dir</a></td>
									<td>设置元素中内容的文本方向。</td>
								</tr>
								<tr>
									<td><a href="/tags/att-global-draggable.html"
											title="HTML draggable 属性">draggable</a><span
										class="badge pull-right">New</span></td>
									<td>指定某个元素是否可以拖动</td>
								</tr>
								<tr>
									<td><a href="/tags/att-global-dropzone.html"
											title="HTML dropzone 属性">dropzone</a><span
										class="badge pull-right">New</span></td>
									<td>指定是否将数据复制，移动，或链接，或删除</td>
								</tr>
								<tr>
									<td><a href="/tags/att-global-hidden.html"
											title="HTML hidden 属性">hidden</a><span
										class="badge pull-right">New</span></td>
									<td>hidden 属性规定对元素进行隐藏。</td>
								</tr>
								<tr>
									<td><a href="/tags/att-global-id.html" title="HTML id 属性">id</a></td>
									<td>规定元素的唯一 id</td>
								</tr>
								<tr>
									<td><a href="/tags/att-global-lang.html"
											title="HTML lang 属性">lang</a></td>
									<td>设置元素中内容的语言代码。</td>
								</tr>
								<tr>
									<td><a href="/tags/att-global-spellcheck.html"
											title="HTML spellcheck 属性">spellcheck</a><span
										class="badge pull-right">New</span></td>
									<td>检测元素是否拼写错误</td>
								</tr>
								<tr>
									<td><a href="/tags/att-global-style.html"
											title="HTML style 属性">style</a></td>
									<td>规定元素的行内样式（inline style）</td>
								</tr>
								<tr>
									<td><a href="/tags/att-global-tabindex.html"
											title="HTML tabindex 属性">tabindex</a></td>
									<td>设置元素的 Tab 键控制次序。</td>
								</tr>
								<tr>
									<td><a href="/tags/att-global-title.html"
											title="HTML title 属性">title</a></td>
									<td>规定元素的额外信息（可在工具提示中显示）</td>
								</tr>
								<tr>
									<td><a href="/tags/att-global-translate.html"
											title="HTML translate 属性">translate</a><span
										class="badge pull-right">New</span></td>
									<td>指定是否一个元素的值在页面载入时是否需要翻译</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!-- item over -->


				<!-- item start -->
				<a id="html-event" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">事件</h3>
					</div>
					<div class="panel-body">
						<p>
							<span class="badge">New</span>&nbsp;: HTML5新标签
						</p>
						<h5 class="text-primary">窗口事件属性（Window Event Attributes）</h5>

						<h6 class="text-primary">由窗口触发该事件 (适用于 &lt;body&gt; 标签):</h6>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th style="width: 28%;">属性</th>
									<th style="width: 8%;">值</th>
									<th>描述</th>
								</tr>

								<tr>
									<td><a href="ev-onafterprint.html">onafterprint</a><span
										class="badge pull-right">New</span></td>
									<td><i>script</i></td>
									<td>在打印文档之后运行脚本</td>
								</tr>

								<tr>
									<td><a href="ev-onbeforeprint.html">onbeforeprint</a><span
										class="badge pull-right">New</span></td>
									<td><i>script</i></td>
									<td>在文档打印之前运行脚本</td>
								</tr>

								<tr>
									<td>onbeforeonload<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>在文档加载之前运行脚本</td>
								</tr>

								<tr>
									<td>onblur</td>
									<td><i>script</i></td>
									<td>当窗口失去焦点时运行脚本</td>
								</tr>

								<tr>
									<td>onerror<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当错误发生时运行脚本</td>
								</tr>

								<tr>
									<td>onfocus</td>
									<td><i>script</i></td>
									<td>当窗口获得焦点时运行脚本</td>
								</tr>

								<tr>
									<td>onhaschange<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当文档改变时运行脚本</td>
								</tr>

								<tr>
									<td><a href="ev-onload.html">onload</a></td>
									<td><i>script</i></td>
									<td>当文档加载时运行脚本</td>
								</tr>

								<tr>
									<td>onmessage<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当触发消息时运行脚本</td>
								</tr>

								<tr>
									<td>onoffline<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当文档离线时运行脚本</td>
								</tr>

								<tr>
									<td>ononline<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当文档上线时运行脚本</td>
								</tr>

								<tr>
									<td>onpagehide<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当窗口隐藏时运行脚本</td>
								</tr>

								<tr>
									<td>onpageshow<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当窗口可见时运行脚本</td>
								</tr>

								<tr>
									<td>onpopstate<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当窗口历史记录改变时运行脚本</td>
								</tr>

								<tr>
									<td>onredo<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当文档执行再执行操作（redo）时运行脚本</td>
								</tr>

								<tr>
									<td><a href="ev-onresize.html">onresize</a><span
										class="badge pull-right">New</span></td>
									<td><i>script</i></td>
									<td>当调整窗口大小时运行脚本</td>
								</tr>

								<tr>
									<td>onstorage<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当 Web Storage 区域更新时（存储空间中的数据发生变化时）运行脚本</td>
								</tr>

								<tr>
									<td>onundo<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当文档执行撤销时运行脚本</td>
								</tr>

								<tr>
									<td><a href="ev-onunload.html">onunload</a><span
										class="badge pull-right">New</span></td>
									<td><i>script</i></td>
									<td>当用户离开文档时运行脚本</td>
								</tr>
							</tbody>
						</table>

						<h5 class="text-primary">表单事件(Form Events)</h5>

						<h6 class="text-primary">表单事件在HTML表单中触发 (适用于所有 HTML 元素,
							但该HTML元素需在form表单内):</h6>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th style="width: 28%;">属性</th>
									<th style="width: 8%;">值</th>
									<th>描述</th>
								</tr>

								<tr>
									<td><a href="ev-onblur.html">onblur</a></td>
									<td><i>script</i></td>
									<td>当元素失去焦点时运行脚本</td>
								</tr>

								<tr>
									<td><a href="ev-onchange.html">onchange</a></td>
									<td><i>script</i></td>
									<td>当元素改变时运行脚本</td>
								</tr>

								<tr>
									<td>oncontextmenu<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当触发上下文菜单时运行脚本</td>
								</tr>

								<tr>
									<td><a href="ev-onfocus.html">onfocus</a></td>
									<td><i>script</i></td>
									<td>当元素获得焦点时运行脚本</td>
								</tr>

								<tr>
									<td>onformchange<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当表单改变时运行脚本</td>
								</tr>

								<tr>
									<td>onforminput<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当表单获得用户输入时运行脚本</td>
								</tr>

								<tr>
									<td>oninput<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当元素获得用户输入时运行脚本</td>
								</tr>

								<tr>
									<td>oninvalid<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当元素无效时运行脚本</td>
								</tr>

								<tr>
									<td>onreset</td>
									<td><i>script</i></td>
									<td>当表单重置时运行脚本。<span class="deprecated">HTML 5 不支持。</span></td>
								</tr>

								<tr>
									<td><a href="ev-onselect.html">onselect</a></td>
									<td><i>script</i></td>
									<td>当选取元素时运行脚本</td>
								</tr>

								<tr>
									<td><a href="ev-onsubmit.html">onsubmit</a></td>
									<td><i>script</i></td>
									<td>当提交表单时运行脚本</td>
								</tr>
							</tbody>
						</table>

						<h5 class="text-primary">键盘事件（Keyboard Events）</h5>

						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th style="width: 28%;">属性</th>
									<th style="width: 8%;">值</th>
									<th>描述</th>
								</tr>

								<tr>
									<td><a href="ev-onkeydown.html">onkeydown</a></td>
									<td><i>script</i></td>
									<td>当按下按键时运行脚本</td>
								</tr>

								<tr>
									<td><a href="ev-onkeypress.html">onkeypress</a></td>
									<td><i>script</i></td>
									<td>当按下并松开按键时运行脚本</td>
								</tr>

								<tr>
									<td><a href="ev-onkeyup.html">onkeyup</a></td>
									<td><i>script</i></td>
									<td>当松开按键时运行脚本</td>
								</tr>
							</tbody>
						</table>

						<h5 class="text-primary">鼠标事件（Mouse Events）</h5>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th style="width: 28%;">属性</th>
									<th style="width: 8%;">值</th>
									<th>描述</th>
								</tr>

								<tr>
									<td><a href="ev-onclick.html">onclick</a></td>
									<td><i>script</i></td>
									<td>当单击鼠标时运行脚本</td>
								</tr>

								<tr>
									<td><a href="ev-ondblclick.html">ondblclick</a></td>
									<td><i>script</i></td>
									<td>当双击鼠标时运行脚本</td>
								</tr>

								<tr>
									<td>ondrag<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当拖动元素时运行脚本</td>
								</tr>

								<tr>
									<td>ondragend<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当拖动操作结束时运行脚本</td>
								</tr>

								<tr>
									<td>ondragenter<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当元素被拖动至有效的拖放目标时运行脚本</td>
								</tr>

								<tr>
									<td>ondragleave<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当元素离开有效拖放目标时运行脚本</td>
								</tr>

								<tr>
									<td>ondragover<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当元素被拖动至有效拖放目标上方时运行脚本</td>
								</tr>

								<tr>
									<td>ondragstart<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当拖动操作开始时运行脚本</td>
								</tr>

								<tr>
									<td>ondrop<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当被拖动元素正在被拖放时运行脚本</td>
								</tr>

								<tr>
									<td><a href="ev-onmousedown.html">onmousedown</a></td>
									<td><i>script</i></td>
									<td>当按下鼠标按钮时运行脚本</td>
								</tr>

								<tr>
									<td><a href="ev-onmousemove.html">onmousemove</a></td>
									<td><i>script</i></td>
									<td>当鼠标指针移动时运行脚本</td>
								</tr>

								<tr>
									<td><a href="ev-onmouseout.html">onmouseout</a></td>
									<td><i>script</i></td>
									<td>当鼠标指针移出元素时运行脚本</td>
								</tr>

								<tr>
									<td><a href="ev-onmouseover.html">onmouseover</a></td>
									<td><i>script</i></td>
									<td>当鼠标指针移至元素之上时运行脚本</td>
								</tr>

								<tr>
									<td><a href="ev-onmouseup.html">onmouseup</a></td>
									<td><i>script</i></td>
									<td>当松开鼠标按钮时运行脚本</td>
								</tr>

								<tr>
									<td>onmousewheel<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当转动鼠标滚轮时运行脚本</td>
								</tr>

								<tr>
									<td>onscroll<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当滚动元素的滚动条时运行脚本</td>
								</tr>
							</tbody>
						</table>

						<h5 class="text-primary">多媒体事件(Media Events)</h5>

						<h6 class="text-primary">
							<p>通过视频（videos），图像（images）或者音频（audio） 触发该事件，多应用于HTML媒体元素比如
								&lt;audio&gt;, &lt;embed&gt;, &lt;img&gt;, &lt;object&gt;,
								和&lt;video&gt;):</p>
						</h6>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th style="width: 28%;">属性</th>
									<th style="width: 8%;">值</th>
									<th>描述</th>
								</tr>

								<tr>
									<td>onabort</td>
									<td><i>script</i></td>
									<td>当发生中止事件时运行脚本</td>
								</tr>

								<tr>
									<td>oncanplay<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当媒介能够开始播放但可能因缓冲而需要停止时运行脚本</td>
								</tr>

								<tr>
									<td>oncanplaythrough<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当媒介能够无需因缓冲而停止即可播放至结尾时运行脚本</td>
								</tr>

								<tr>
									<td>ondurationchange<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当媒介长度改变时运行脚本</td>
								</tr>

								<tr>
									<td>onemptied<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当媒介资源元素突然为空时（网络错误、加载错误等）运行脚本</td>
								</tr>

								<tr>
									<td>onended<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当媒介已抵达结尾时运行脚本</td>
								</tr>

								<tr>
									<td>onerror<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当在元素加载期间发生错误时运行脚本</td>
								</tr>

								<tr>
									<td>onloadeddata<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当加载媒介数据时运行脚本</td>
								</tr>

								<tr>
									<td>onloadedmetadata<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当媒介元素的持续时间以及其他媒介数据已加载时运行脚本</td>
								</tr>

								<tr>
									<td>onloadstart<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当浏览器开始加载媒介数据时运行脚本</td>
								</tr>

								<tr>
									<td>onpause<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当媒介数据暂停时运行脚本</td>
								</tr>

								<tr>
									<td>onplay<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当媒介数据将要开始播放时运行脚本</td>
								</tr>

								<tr>
									<td>onplaying<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当媒介数据已开始播放时运行脚本</td>
								</tr>

								<tr>
									<td>onprogress<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当浏览器正在取媒介数据时运行脚本</td>
								</tr>

								<tr>
									<td>onratechange<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当媒介数据的播放速率改变时运行脚本</td>
								</tr>

								<tr>
									<td>onreadystatechange<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当就绪状态（ready-state）改变时运行脚本</td>
								</tr>

								<tr>
									<td>onseeked<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当媒介元素的定位属性 [1] 不再为真且定位已结束时运行脚本</td>
								</tr>

								<tr>
									<td>onseeking<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当媒介元素的定位属性为真且定位已开始时运行脚本</td>
								</tr>

								<tr>
									<td>onstalled<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当取回媒介数据过程中（延迟）存在错误时运行脚本</td>
								</tr>

								<tr>
									<td>onsuspend<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当浏览器已在取媒介数据但在取回整个媒介文件之前停止时运行脚本</td>
								</tr>

								<tr>
									<td>ontimeupdate<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当媒介改变其播放位置时运行脚本</td>
								</tr>

								<tr>
									<td>onvolumechange<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当媒介改变音量亦或当音量被设置为静音时运行脚本</td>
								</tr>

								<tr>
									<td>onwaiting<span class="badge pull-right">New</span>
									</td>
									<td><i>script</i></td>
									<td>当媒介已停止播放但打算继续播放时运行脚本</td>
								</tr>
							</tbody>
						</table>

						<h5 class="text-primary">其他事件</h5>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th style="width: 160px">属性</th>
									<th style="width: 40px">值</th>
									<th>描述</th>
								</tr>
								<tr>
									<td><a href="ev-onshow.html">onshow</a><span
										class="badge pull-right">New</span></td>
									<td><i>script</i></td>
									<td>当 &lt;menu&gt; 元素在上下文显示时触发</td>
								</tr>
								<tr>
									<td><a href="ev-ontoggle.html">ontoggle</a><span
										class="badge pull-right">New</span></td>
									<td><i>script</i></td>
									<td>当用户打开或关闭 &lt;details&gt; 元素时触发</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-canvas" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">画布</h3>
					</div>
					<div class="panel-body">
						<h5 class="text-primary">颜色、样式和阴影</h5>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th width="25%" align="left">属性</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td><a href="canvas-fillstyle.html">fillStyle</a></td>
									<td>设置或返回用于填充绘画的颜色、渐变或模式。</td>
								</tr>
								<tr>
									<td><a href="canvas-strokestyle.html">strokeStyle</a></td>
									<td>设置或返回用于笔触的颜色、渐变或模式。</td>
								</tr>
								<tr>
									<td><a href="canvas-shadowcolor.html">shadowColor</a></td>
									<td>设置或返回用于阴影的颜色。</td>
								</tr>
								<tr>
									<td><a href="canvas-shadowblur.html">shadowBlur</a></td>
									<td>设置或返回用于阴影的模糊级别。</td>
								</tr>
								<tr>
									<td><a href="canvas-shadowoffsetx.html">shadowOffsetX</a></td>
									<td>设置或返回阴影与形状的水平距离。</td>
								</tr>
								<tr>
									<td><a href="canvas-shadowoffsety.html">shadowOffsetY</a></td>
									<td>设置或返回阴影与形状的垂直距离。</td>
								</tr>
							</tbody>
						</table>
						<br>

						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th width="25%" align="left">方法</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td><a href="canvas-createlineargradient.html">createLinearGradient()</a></td>
									<td>创建线性渐变（用在画布内容上）。</td>
								</tr>
								<tr>
									<td><a href="canvas-createpattern.html">createPattern()</a></td>
									<td>在指定的方向上重复指定的元素。</td>
								</tr>
								<tr>
									<td><a href="canvas-createradialgradient.html">createRadialGradient()</a></td>
									<td>创建放射状/环形的渐变（用在画布内容上）。</td>
								</tr>
								<tr>
									<td><a href="canvas-addcolorstop.html">addColorStop()</a></td>
									<td>规定渐变对象中的颜色和停止位置。</td>
								</tr>
							</tbody>
						</table>

						<h5 class="text-primary">线条样式</h5>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th width="25%" align="left">属性</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td><a href="canvas-linecap.html">lineCap</a></td>
									<td>设置或返回线条的结束端点样式。</td>
								</tr>
								<tr>
									<td><a href="canvas-linejoin.html">lineJoin</a></td>
									<td>设置或返回两条线相交时，所创建的拐角类型。</td>
								</tr>
								<tr>
									<td><a href="canvas-linewidth.html">lineWidth</a></td>
									<td>设置或返回当前的线条宽度。</td>
								</tr>
								<tr>
									<td><a href="canvas-miterlimit.html">miterLimit</a></td>
									<td>设置或返回最大斜接长度。</td>
								</tr>
							</tbody>
						</table>
						<h5 class="text-primary">矩形</h5>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th width="25%" align="left">方法</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td><a href="canvas-rect.html">rect()</a></td>
									<td>创建矩形。</td>
								</tr>
								<tr>
									<td><a href="canvas-fillrect.html">fillRect()</a></td>
									<td>绘制"被填充"的矩形。</td>
								</tr>
								<tr>
									<td><a href="canvas-strokerect.html">strokeRect()</a></td>
									<td>绘制矩形（无填充）。</td>
								</tr>
								<tr>
									<td><a href="canvas-clearrect.html">clearRect()</a></td>
									<td>在给定的矩形内清除指定的像素。</td>
								</tr>
							</tbody>
						</table>

						<h5 class="text-primary">路径</h5>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th width="25%" align="left">方法</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td><a href="canvas-fill.html">fill()</a></td>
									<td>填充当前绘图（路径）。</td>
								</tr>
								<tr>
									<td><a href="canvas-stroke.html">stroke()</a></td>
									<td>绘制已定义的路径。</td>
								</tr>
								<tr>
									<td><a href="canvas-beginpath.html">beginPath()</a></td>
									<td>起始一条路径，或重置当前路径。</td>
								</tr>
								<tr>
									<td><a href="canvas-moveto.html">moveTo()</a></td>
									<td>把路径移动到画布中的指定点，不创建线条。</td>
								</tr>
								<tr>
									<td><a href="canvas-closepath.html">closePath()</a></td>
									<td>创建从当前点回到起始点的路径。</td>
								</tr>
								<tr>
									<td><a href="canvas-lineto.html">lineTo()</a></td>
									<td>添加一个新点，然后在画布中创建从该点到最后指定点的线条。</td>
								</tr>
								<tr>
									<td><a href="canvas-clip.html">clip()</a></td>
									<td>从原始画布剪切任意形状和尺寸的区域。</td>
								</tr>
								<tr>
									<td><a href="canvas-quadraticcurveto.html">quadraticCurveTo()</a></td>
									<td>创建二次贝塞尔曲线。</td>
								</tr>
								<tr>
									<td><a href="canvas-beziercurveto.html">bezierCurveTo()</a></td>
									<td>创建三次贝塞尔曲线。</td>
								</tr>
								<tr>
									<td><a href="canvas-arc.html">arc()</a></td>
									<td>创建弧/曲线（用于创建圆形或部分圆）。</td>
								</tr>
								<tr>
									<td><a href="canvas-arcto.html">arcTo()</a></td>
									<td>创建两切线之间的弧/曲线。</td>
								</tr>
								<tr>
									<td><a href="canvas-ispointinpath.html">isPointInPath()</a></td>
									<td>如果指定的点位于当前路径中，则返回 true，否则返回 false。</td>
								</tr>
							</tbody>
						</table>

						<h5 class="text-primary">转换</h5>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th width="25%" align="left">方法</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td><a href="canvas-scale.html">scale()</a></td>
									<td>缩放当前绘图至更大或更小。</td>
								</tr>
								<tr>
									<td><a href="canvas-rotate.html">rotate()</a></td>
									<td>旋转当前绘图。</td>
								</tr>
								<tr>
									<td><a href="canvas-translate.html">translate()</a></td>
									<td>重新映射画布上的 (0,0) 位置。</td>
								</tr>
								<tr>
									<td><a href="canvas-transform.html">transform()</a></td>
									<td>替换绘图的当前转换矩阵。</td>
								</tr>
								<tr>
									<td><a href="canvas-settransform.html">setTransform()</a></td>
									<td>将当前转换重置为单位矩阵。然后运行 transform()。</td>
								</tr>
							</tbody>
						</table>

						<h5 class="text-primary">文本</h5>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th width="25%" align="left">属性</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td><a href="canvas-font.html">font</a></td>
									<td>设置或返回文本内容的当前字体属性。</td>
								</tr>
								<tr>
									<td><a href="canvas-textalign.html">textAlign</a></td>
									<td>设置或返回文本内容的当前对齐方式。</td>
								</tr>
								<tr>
									<td><a href="canvas-textbaseline.html">textBaseline</a></td>
									<td>设置或返回在绘制文本时使用的当前文本基线。</td>
								</tr>
							</tbody>
						</table>
						<br>

						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th width="25%" align="left">方法</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td><a href="canvas-filltext.html">fillText()</a></td>
									<td>在画布上绘制"被填充的"文本。</td>
								</tr>
								<tr>
									<td><a href="canvas-stroketext.html">strokeText()</a></td>
									<td>在画布上绘制文本（无填充）。</td>
								</tr>
								<tr>
									<td><a href="canvas-measuretext.html">measureText()</a></td>
									<td>返回包含指定文本宽度的对象。</td>
								</tr>
							</tbody>
						</table>

						<h5 class="text-primary">图像绘制</h5>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th width="25%" align="left">方法</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td><a href="canvas-drawimage.html">drawImage()</a></td>
									<td>向画布上绘制图像、画布或视频。</td>
								</tr>
							</tbody>
						</table>

						<h5 class="text-primary">像素操作</h5>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th width="25%" align="left">属性</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td><a href="canvas-imagedata-width.html">width</a></td>
									<td>返回 ImageData 对象的宽度。</td>
								</tr>
								<tr>
									<td><a href="canvas-imagedata-height.html">height</a></td>
									<td>返回 ImageData 对象的高度。</td>
								</tr>
								<tr>
									<td><a href="canvas-imagedata-data.html">data</a></td>
									<td>返回一个对象，其包含指定的 ImageData 对象的图像数据。</td>
								</tr>
							</tbody>
						</table>
						<br>

						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th width="25%" align="left">方法</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td><a href="canvas-createimagedata.html">createImageData()</a></td>
									<td>创建新的、空白的 ImageData 对象。</td>
								</tr>
								<tr>
									<td><a href="canvas-getimagedata.html">getImageData()</a></td>
									<td>返回 ImageData 对象，该对象为画布上指定的矩形复制像素数据。</td>
								</tr>
								<tr>
									<td><a href="canvas-putimagedata.html">putImageData()</a></td>
									<td>把图像数据（从指定的 ImageData 对象）放回画布上。</td>
								</tr>
							</tbody>
						</table>

						<h5 class="text-primary">合成</h5>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th width="25%" align="left">属性</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td><a href="canvas-globalalpha.html">globalAlpha</a></td>
									<td>设置或返回绘图的当前 alpha 或透明值。</td>
								</tr>
								<tr>
									<td><a href="canvas-globalcompositeoperation.html">globalCompositeOperation</a></td>
									<td>设置或返回新图像如何绘制到已有的图像上。</td>
								</tr>
							</tbody>
						</table>

						<h5 class="text-primary">其他</h5>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th width="25%" align="left">方法</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td>save()</td>
									<td>保存当前环境的状态。</td>
								</tr>
								<tr>
									<td>restore()</td>
									<td>返回之前保存过的路径状态和属性。</td>
								</tr>
								<tr>
									<td>createEvent()</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td>getContext()</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td>toDataURL()</td>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-media" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">音频 / 视频</h3>
					</div>
					<div class="panel-body">
						<h5 class="text-primary">HTML 音频/视频 方法</h5>

						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th width="25%" align="left">方法</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td><a href="av-met-addtexttrack.html">addTextTrack()</a></td>
									<td>向音频/视频添加新的文本轨道。</td>
								</tr>
								<tr>
									<td><a href="av-met-canplaytype.html">canPlayType()</a></td>
									<td>检测浏览器是否能播放指定的音频/视频类型。</td>
								</tr>
								<tr>
									<td><a href="av-met-load.html">load()</a></td>
									<td>重新加载音频/视频元素。</td>
								</tr>
								<tr>
									<td><a href="av-met-play.html">play()</a></td>
									<td>开始播放音频/视频。</td>
								</tr>
								<tr>
									<td><a href="av-met-pause.html">pause()</a></td>
									<td>暂停当前播放的音频/视频。</td>
								</tr>
							</tbody>
						</table>
						<h5 class="text-primary">HTML 音频/视频属性</h5>

						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th width="25%" align="left">属性</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td><a href="av-prop-audiotracks.html">audioTracks</a></td>
									<td>返回表示可用音频轨道的 AudioTrackList 对象。</td>
								</tr>
								<tr>
									<td><a href="av-prop-autoplay.html">autoplay</a></td>
									<td>设置或返回是否在加载完成后随即播放音频/视频。</td>
								</tr>
								<tr>
									<td><a href="av-prop-buffered.html">buffered</a></td>
									<td>返回表示音频/视频已缓冲部分的 TimeRanges 对象。</td>
								</tr>
								<tr>
									<td><a href="av-prop-controller.html">controller</a></td>
									<td>返回表示音频/视频当前媒体控制器的 MediaController 对象。</td>
								</tr>
								<tr>
									<td><a href="av-prop-controls.html">controls</a></td>
									<td>设置或返回音频/视频是否显示控件（比如播放/暂停等）。</td>
								</tr>
								<tr>
									<td>crossOrigin</td>
									<td>设置或返回音频/视频的 CORS 设置。</td>
								</tr>
								<tr>
									<td><a href="av-prop-currentsrc.html">currentSrc</a></td>
									<td>返回当前音频/视频的 URL。</td>
								</tr>
								<tr>
									<td><a href="av-prop-currenttime.html">currentTime</a></td>
									<td>设置或返回音频/视频中的当前播放位置（以秒计）。</td>
								</tr>
								<tr>
									<td><a href="av-prop-defaultmuted.html">defaultMuted</a></td>
									<td>设置或返回音频/视频默认是否静音。</td>
								</tr>
								<tr>
									<td><a href="av-prop-defaultplaybackrate.html">defaultPlaybackRate</a></td>
									<td>设置或返回音频/视频的默认播放速度。</td>
								</tr>
								<tr>
									<td><a href="av-prop-duration.html">duration</a></td>
									<td>返回当前音频/视频的长度（以秒计）。</td>
								</tr>
								<tr>
									<td><a href="av-prop-ended.html">ended</a></td>
									<td>返回音频/视频的播放是否已结束。</td>
								</tr>
								<tr>
									<td><a href="av-prop-error.html">error</a></td>
									<td>返回表示音频/视频错误状态的 MediaError 对象。</td>
								</tr>
								<tr>
									<td><a href="av-prop-loop.html">loop</a></td>
									<td>设置或返回音频/视频是否应在结束时重新播放。</td>
								</tr>
								<tr>
									<td><a href="av-prop-mediagroup.html">mediaGroup</a></td>
									<td>设置或返回音频/视频所属的组合（用于连接多个音频/视频元素）。</td>
								</tr>
								<tr>
									<td><a href="av-prop-muted.html">muted</a></td>
									<td>设置或返回音频/视频是否静音。</td>
								</tr>
								<tr>
									<td><a href="av-prop-networkstate.html">networkState</a></td>
									<td>返回音频/视频的当前网络状态。</td>
								</tr>
								<tr>
									<td><a href="av-prop-paused.html">paused</a></td>
									<td>设置或返回音频/视频是否暂停。</td>
								</tr>
								<tr>
									<td><a href="av-prop-playbackrate.html">playbackRate</a></td>
									<td>设置或返回音频/视频播放的速度。</td>
								</tr>
								<tr>
									<td><a href="av-prop-played.html">played</a></td>
									<td>返回表示音频/视频已播放部分的 TimeRanges 对象。</td>
								</tr>
								<tr>
									<td><a href="av-prop-preload.html">preload</a></td>
									<td>设置或返回音频/视频是否应该在页面加载后进行加载。</td>
								</tr>
								<tr>
									<td><a href="av-prop-readystate.html">readyState</a></td>
									<td>返回音频/视频当前的就绪状态。</td>
								</tr>
								<tr>
									<td><a href="av-prop-seekable.html">seekable</a></td>
									<td>返回表示音频/视频可寻址部分的 TimeRanges 对象。</td>
								</tr>
								<tr>
									<td><a href="av-prop-seeking.html">seeking</a></td>
									<td>返回用户是否正在音频/视频中进行查找。</td>
								</tr>
								<tr>
									<td><a href="av-prop-src.html">src</a></td>
									<td>设置或返回音频/视频元素的当前来源。</td>
								</tr>
								<tr>
									<td><a href="av-prop-startdate.html">startDate</a></td>
									<td>返回表示当前时间偏移的 Date 对象。</td>
								</tr>
								<tr>
									<td><a href="av-prop-texttracks.html">textTracks</a></td>
									<td>返回表示可用文本轨道的 TextTrackList 对象。</td>
								</tr>
								<tr>
									<td><a href="av-prop-videotracks.html">videoTracks</a></td>
									<td>返回表示可用视频轨道的 VideoTrackList 对象。</td>
								</tr>
								<tr>
									<td><a href="av-prop-volume.html">volume</a></td>
									<td>设置或返回音频/视频的音量。</td>
								</tr>
							</tbody>
						</table>
						<h5 class="text-primary">HTML 音频/视频事件</h5>

						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th width="25%" align="left">事件</th>
									<th width="75%" align="left">描述</th>
								</tr>
								<tr>
									<td><a href="av-event-abort.html">abort</a></td>
									<td>当音频/视频的加载已放弃时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-canplay.html">canplay</a></td>
									<td>当浏览器可以开始播放音频/视频时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-canplaythrough.html">canplaythrough</a></td>
									<td>当浏览器可在不因缓冲而停顿的情况下进行播放时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-durationchange.html">durationchange</a></td>
									<td>当音频/视频的时长已更改时触发。</td>
								</tr>
								<tr>
									<td>emptied</td>
									<td>当目前的播放列表为空时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-ended.html">ended</a></td>
									<td>当目前的播放列表已结束时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-error.html">error</a></td>
									<td>当在音频/视频加载期间发生错误时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-loadeddata.html">loadeddata</a></td>
									<td>当浏览器已加载音频/视频的当前帧时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-loadedmetadata.html">loadedmetadata</a></td>
									<td>当浏览器已加载音频/视频的元数据时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-loadstart.html">loadstart</a></td>
									<td>当浏览器开始查找音频/视频时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-pause.html">pause</a></td>
									<td>当音频/视频已暂停时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-play.html">play</a></td>
									<td>当音频/视频已开始或不再暂停时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-playing.html">playing</a></td>
									<td>当音频/视频在因缓冲而暂停或停止后已就绪时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-progress.html">progress</a></td>
									<td>当浏览器正在下载音频/视频时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-ratechange.html">ratechange</a></td>
									<td>当音频/视频的播放速度已更改时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-seeked.html">seeked</a></td>
									<td>当用户已移动/跳跃到音频/视频中的新位置时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-seeking.html">seeking</a></td>
									<td>当用户开始移动/跳跃到音频/视频中的新位置时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-stalled.html">stalled</a></td>
									<td>当浏览器尝试获取媒体数据，但数据不可用时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-suspend.html">suspend</a></td>
									<td>当浏览器刻意不获取媒体数据时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-timeupdate.html">timeupdate</a></td>
									<td>当目前的播放位置已更改时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-volumechange.html">volumechange</a></td>
									<td>当音量已更改时触发。</td>
								</tr>
								<tr>
									<td><a href="av-event-waiting.html">waiting</a></td>
									<td>当视频由于需要缓冲下一帧而停止时触发。</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-doctypes" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">有效DOCTYPES</h3>
					</div>
					<div class="panel-body">
						<h5 class="text-primary">HTML 元素 - 有效 DOCTYPES</h5>
						<p>下面的表格列出了所有的 HTML5/HTML 4.01/XHTML 元素，以及它们会出现在什么文档类型
							(!DOCTYPE) 中：</p>
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com/tags/">
							<tbody>
								<tr>
									<th style="background-color: #ffffff; border: none;"></th>
									<th style="background-color: #ffffff; border: none;"></th>
									<th colspan="3" style="text-align: center;">HTML 4.01 /
										XHTML 1.0</th>
									<th style="background-color: #ffffff; border: none;"></th>
								</tr>
								<tr>
									<th width="20%" valign="bottom" align="left">Tag</th>
									<th width="15%" valign="bottom" align="left">HTML5</th>
									<th width="15%" align="right">Transitional</th>
									<th width="15%" align="right">Strict</th>
									<th width="15%" align="right">Frameset</th>
									<th width="20%" valign="bottom" align="right">XHTML 1.1</th>
								</tr>
								<tr>
									<td align="left"><a href="tag-a.html">&lt;a&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-abbr.html">&lt;abbr&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-acronym.html">&lt;acronym&gt;</a></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-address.html">&lt;address&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-applet.html">&lt;applet&gt;</a></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-area.html">&lt;area&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-article.html">&lt;article&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-aside.html">&lt;aside&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-audio.html">&lt;audio&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-b.html">&lt;b&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-base.html">&lt;base&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-basefont.html">&lt;basefont&gt;</a></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-bdi.html">&lt;bdi&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-bdo.html">&lt;bdo&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-big.html">&lt;big&gt;</a></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-blockquote.html">&lt;blockquote&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-body.html">&lt;body&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-br.html">&lt;br&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-button.html">&lt;button&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-canvas.html">&lt;canvas&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-caption.html">&lt;caption&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-center.html">&lt;center&gt;</a></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-cite.html">&lt;cite&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-phrase_elements.html">&lt;code&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-col.html">&lt;col&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-colgroup.html">&lt;colgroup&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-command.html">&lt;command&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-datalist.html">&lt;datalist&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-dd.html">&lt;dd&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-del.html">&lt;del&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-details.html">&lt;details&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-phrase_elements.html">&lt;dfn&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-dir.html">&lt;dir&gt;</a></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-div.html">&lt;div&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-dl.html">&lt;dl&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-dt.html">&lt;dt&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-phrase_elements.html">&lt;em&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-embed.html">&lt;embed&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-fieldset.html">&lt;fieldset&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-figcaption.html">&lt;figcaption&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-figure.html">&lt;figure&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-font.html">&lt;font&gt;</a></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-footer.html">&lt;footer&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-form.html">&lt;form&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-frame.html">&lt;frame&gt;</a></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-frameset.html">&lt;frameset&gt;</a></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-hn.html">&lt;h1&gt; to
											&lt;h6&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-head.html">&lt;head&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-header.html">&lt;header&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-hgroup.html">&lt;hgroup&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-hr.html">&lt;hr&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-html.html">&lt;html&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-i.html">&lt;i&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-iframe.html">&lt;iframe&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-img.html">&lt;img&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-input.html">&lt;input&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-ins.html">&lt;ins&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-phrase_elements.html">&lt;kbd&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-keygen.html">&lt;keygen&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-label.html">&lt;label&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-legend.html">&lt;legend&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-li.html">&lt;li&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-link.html">&lt;link&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-map.html">&lt;map&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-mark.html">&lt;mark&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-menu.html">&lt;menu&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-meta.html">&lt;meta&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-meter.html">&lt;meter&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-nav.html">&lt;nav&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-noframes.html">&lt;noframes&gt;</a></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-noscript.html">&lt;noscript&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-object.html">&lt;object&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-ol.html">&lt;ol&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-optgroup.html">&lt;optgroup&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-option.html">&lt;option&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-output.html">&lt;output&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-p.html">&lt;p&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-param.html">&lt;param&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-pre.html">&lt;pre&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-progress.html">&lt;progress&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-q.html">&lt;q&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-rp.html">&lt;rp&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-rt.html">&lt;rt&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-ruby.html">&lt;ruby&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-s.html">&lt;s&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-phrase_elements.html">&lt;samp&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-script.html">&lt;script&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-section.html">&lt;section&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-select.html">&lt;select&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-small.html">&lt;small&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-source.html">&lt;source&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-span.html">&lt;span&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-strike.html">&lt;strike&gt;</a></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-phrase_elements.html">&lt;strong&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-style.html">&lt;style&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-sup.html">&lt;sub&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-summary.html">&lt;summary&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-sup.html">&lt;sup&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-table.html">&lt;table&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-tbody.html">&lt;tbody&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-td.html">&lt;td&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-textarea.html">&lt;textarea&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-tfoot.html">&lt;tfoot&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-th.html">&lt;th&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-thead.html">&lt;thead&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-time.html">&lt;time&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-title.html">&lt;title&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-tr.html">&lt;tr&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-track.html">&lt;track&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-tt.html">&lt;tt&gt;</a></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-u.html">&lt;u&gt;</a></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-ul.html">&lt;ul&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-phrase_elements.html">&lt;var&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
									<td align="right">Yes</td>
								</tr>
								<tr>
									<td align="left"><a href="tag-video.html">&lt;video&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
								<tr>
									<td align="left"><a href="tag-wbr.html">&lt;wbr&gt;</a></td>
									<td align="right">Yes</td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
									<td align="right"><span class="marked">No</span></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-color" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">颜色名</h3>
					</div>
					<div class="panel-body">
						<table
							class="table table-bordered table-responsive table-striped runoob"
							data-base="http://www.runoob.com">
							<tbody>
								<tr>
									<th width="25%" align="left">Color Name</th>
									<th width="15%" align="left">HEX</th>
									<th width="43%" align="left">Color</th>

								</tr>

								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=AliceBlue">AliceBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=F0F8FF">#F0F8FF</a></td>
									<td bgcolor="#F0F8FF">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=AntiqueWhite">AntiqueWhite</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FAEBD7">#FAEBD7</a></td>
									<td bgcolor="#FAEBD7">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Aqua">Aqua</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=00FFFF">#00FFFF</a></td>
									<td bgcolor="#00FFFF">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Aquamarine">Aquamarine</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=7FFFD4">#7FFFD4</a></td>
									<td bgcolor="#7FFFD4">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Azure">Azure</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=F0FFFF">#F0FFFF</a></td>
									<td bgcolor="#F0FFFF">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Beige">Beige</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=F5F5DC">#F5F5DC</a></td>
									<td bgcolor="#F5F5DC">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Bisque">Bisque</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFE4C4">#FFE4C4</a></td>
									<td bgcolor="#FFE4C4">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Black">Black</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=000000">#000000</a></td>
									<td bgcolor="#000000">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=BlanchedAlmond">BlanchedAlmond</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFEBCD">#FFEBCD</a></td>
									<td bgcolor="#FFEBCD">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Blue">Blue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=0000FF">#0000FF</a></td>
									<td bgcolor="#0000FF">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=BlueViolet">BlueViolet</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=8A2BE2">#8A2BE2</a></td>
									<td bgcolor="#8A2BE2">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Brown">Brown</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=A52A2A">#A52A2A</a></td>
									<td bgcolor="#A52A2A">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=BurlyWood">BurlyWood</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=DEB887">#DEB887</a></td>
									<td bgcolor="#DEB887">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=CadetBlue">CadetBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=5F9EA0">#5F9EA0</a></td>
									<td bgcolor="#5F9EA0">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Chartreuse">Chartreuse</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=7FFF00">#7FFF00</a></td>
									<td bgcolor="#7FFF00">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Chocolate">Chocolate</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=D2691E">#D2691E</a></td>
									<td bgcolor="#D2691E">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Coral">Coral</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FF7F50">#FF7F50</a></td>
									<td bgcolor="#FF7F50">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=CornflowerBlue">CornflowerBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=6495ED">#6495ED</a></td>
									<td bgcolor="#6495ED">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Cornsilk">Cornsilk</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFF8DC">#FFF8DC</a></td>
									<td bgcolor="#FFF8DC">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Crimson">Crimson</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=DC143C">#DC143C</a></td>
									<td bgcolor="#DC143C">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Cyan">Cyan</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=00FFFF">#00FFFF</a></td>
									<td bgcolor="#00FFFF">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DarkBlue">DarkBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=00008B">#00008B</a></td>
									<td bgcolor="#00008B">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DarkCyan">DarkCyan</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=008B8B">#008B8B</a></td>
									<td bgcolor="#008B8B">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DarkGoldenRod">DarkGoldenRod</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=B8860B">#B8860B</a></td>
									<td bgcolor="#B8860B">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DarkGray">DarkGray</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=A9A9A9">#A9A9A9</a></td>
									<td bgcolor="#A9A9A9">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DarkGreen">DarkGreen</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=006400">#006400</a></td>
									<td bgcolor="#006400">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DarkKhaki">DarkKhaki</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=BDB76B">#BDB76B</a></td>
									<td bgcolor="#BDB76B">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DarkMagenta">DarkMagenta</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=8B008B">#8B008B</a></td>
									<td bgcolor="#8B008B">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DarkOliveGreen">DarkOliveGreen</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=556B2F">#556B2F</a></td>
									<td bgcolor="#556B2F">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DarkOrange">DarkOrange</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FF8C00">#FF8C00</a></td>
									<td bgcolor="#FF8C00">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DarkOrchid">DarkOrchid</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=9932CC">#9932CC</a></td>
									<td bgcolor="#9932CC">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DarkRed">DarkRed</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=8B0000">#8B0000</a></td>
									<td bgcolor="#8B0000">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DarkSalmon">DarkSalmon</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=E9967A">#E9967A</a></td>
									<td bgcolor="#E9967A">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DarkSeaGreen">DarkSeaGreen</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=8FBC8F">#8FBC8F</a></td>
									<td bgcolor="#8FBC8F">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DarkSlateBlue">DarkSlateBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=483D8B">#483D8B</a></td>
									<td bgcolor="#483D8B">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DarkSlateGray">DarkSlateGray</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=2F4F4F">#2F4F4F</a></td>
									<td bgcolor="#2F4F4F">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DarkTurquoise">DarkTurquoise</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=00CED1">#00CED1</a></td>
									<td bgcolor="#00CED1">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DarkViolet">DarkViolet</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=9400D3">#9400D3</a></td>
									<td bgcolor="#9400D3">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DeepPink">DeepPink</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FF1493">#FF1493</a></td>
									<td bgcolor="#FF1493">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DeepSkyBlue">DeepSkyBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=00BFFF">#00BFFF</a></td>
									<td bgcolor="#00BFFF">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DimGray">DimGray</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=696969">#696969</a></td>
									<td bgcolor="#696969">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=DodgerBlue">DodgerBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=1E90FF">#1E90FF</a></td>
									<td bgcolor="#1E90FF">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=FireBrick">FireBrick</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=B22222">#B22222</a></td>
									<td bgcolor="#B22222">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=FloralWhite">FloralWhite</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFFAF0">#FFFAF0</a></td>
									<td bgcolor="#FFFAF0">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=ForestGreen">ForestGreen</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=228B22">#228B22</a></td>
									<td bgcolor="#228B22">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Fuchsia">Fuchsia</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FF00FF">#FF00FF</a></td>
									<td bgcolor="#FF00FF">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Gainsboro">Gainsboro</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=DCDCDC">#DCDCDC</a></td>
									<td bgcolor="#DCDCDC">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=GhostWhite">GhostWhite</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=F8F8FF">#F8F8FF</a></td>
									<td bgcolor="#F8F8FF">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Gold">Gold</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFD700">#FFD700</a></td>
									<td bgcolor="#FFD700">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=GoldenRod">GoldenRod</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=DAA520">#DAA520</a></td>
									<td bgcolor="#DAA520">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Gray">Gray</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=808080">#808080</a></td>
									<td bgcolor="#808080">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Green">Green</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=008000">#008000</a></td>
									<td bgcolor="#008000">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=GreenYellow">GreenYellow</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=ADFF2F">#ADFF2F</a></td>
									<td bgcolor="#ADFF2F">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=HoneyDew">HoneyDew</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=F0FFF0">#F0FFF0</a></td>
									<td bgcolor="#F0FFF0">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=HotPink">HotPink</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FF69B4">#FF69B4</a></td>
									<td bgcolor="#FF69B4">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=IndianRed ">IndianRed </a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=CD5C5C">#CD5C5C</a></td>
									<td bgcolor="#CD5C5C">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Indigo  ">Indigo </a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=4B0082">#4B0082</a></td>
									<td bgcolor="#4B0082">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Ivory">Ivory</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFFFF0">#FFFFF0</a></td>
									<td bgcolor="#FFFFF0">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Khaki">Khaki</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=F0E68C">#F0E68C</a></td>
									<td bgcolor="#F0E68C">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Lavender">Lavender</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=E6E6FA">#E6E6FA</a></td>
									<td bgcolor="#E6E6FA">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=LavenderBlush">LavenderBlush</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFF0F5">#FFF0F5</a></td>
									<td bgcolor="#FFF0F5">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=LawnGreen">LawnGreen</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=7CFC00">#7CFC00</a></td>
									<td bgcolor="#7CFC00">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=LemonChiffon">LemonChiffon</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFFACD">#FFFACD</a></td>
									<td bgcolor="#FFFACD">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=LightBlue">LightBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=ADD8E6">#ADD8E6</a></td>
									<td bgcolor="#ADD8E6">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=LightCoral">LightCoral</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=F08080">#F08080</a></td>
									<td bgcolor="#F08080">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=LightCyan">LightCyan</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=E0FFFF">#E0FFFF</a></td>
									<td bgcolor="#E0FFFF">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=LightGoldenRodYellow">LightGoldenRodYellow</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FAFAD2">#FAFAD2</a></td>
									<td bgcolor="#FAFAD2">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=LightGray">LightGray</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=D3D3D3">#D3D3D3</a></td>
									<td bgcolor="#D3D3D3">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=LightGreen">LightGreen</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=90EE90">#90EE90</a></td>
									<td bgcolor="#90EE90">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=LightPink">LightPink</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFB6C1">#FFB6C1</a></td>
									<td bgcolor="#FFB6C1">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=LightSalmon">LightSalmon</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFA07A">#FFA07A</a></td>
									<td bgcolor="#FFA07A">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=LightSeaGreen">LightSeaGreen</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=20B2AA">#20B2AA</a></td>
									<td bgcolor="#20B2AA">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=LightSkyBlue">LightSkyBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=87CEFA">#87CEFA</a></td>
									<td bgcolor="#87CEFA">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=LightSlateGray">LightSlateGray</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=778899">#778899</a></td>
									<td bgcolor="#778899">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=LightSteelBlue">LightSteelBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=B0C4DE">#B0C4DE</a></td>
									<td bgcolor="#B0C4DE">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=LightYellow">LightYellow</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFFFE0">#FFFFE0</a></td>
									<td bgcolor="#FFFFE0">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Lime">Lime</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=00FF00">#00FF00</a></td>
									<td bgcolor="#00FF00">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=LimeGreen">LimeGreen</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=32CD32">#32CD32</a></td>
									<td bgcolor="#32CD32">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Linen">Linen</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FAF0E6">#FAF0E6</a></td>
									<td bgcolor="#FAF0E6">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Magenta">Magenta</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FF00FF">#FF00FF</a></td>
									<td bgcolor="#FF00FF">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Maroon">Maroon</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=800000">#800000</a></td>
									<td bgcolor="#800000">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=MediumAquaMarine">MediumAquaMarine</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=66CDAA">#66CDAA</a></td>
									<td bgcolor="#66CDAA">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=MediumBlue">MediumBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=0000CD">#0000CD</a></td>
									<td bgcolor="#0000CD">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=MediumOrchid">MediumOrchid</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=BA55D3">#BA55D3</a></td>
									<td bgcolor="#BA55D3">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=MediumPurple">MediumPurple</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=9370DB">#9370DB</a></td>
									<td bgcolor="#9370DB">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=MediumSeaGreen">MediumSeaGreen</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=3CB371">#3CB371</a></td>
									<td bgcolor="#3CB371">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=MediumSlateBlue">MediumSlateBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=7B68EE">#7B68EE</a></td>
									<td bgcolor="#7B68EE">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=MediumSpringGreen">MediumSpringGreen</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=00FA9A">#00FA9A</a></td>
									<td bgcolor="#00FA9A">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=MediumTurquoise">MediumTurquoise</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=48D1CC">#48D1CC</a></td>
									<td bgcolor="#48D1CC">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=MediumVioletRed">MediumVioletRed</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=C71585">#C71585</a></td>
									<td bgcolor="#C71585">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=MidnightBlue">MidnightBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=191970">#191970</a></td>
									<td bgcolor="#191970">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=MintCream">MintCream</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=F5FFFA">#F5FFFA</a></td>
									<td bgcolor="#F5FFFA">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=MistyRose">MistyRose</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFE4E1">#FFE4E1</a></td>
									<td bgcolor="#FFE4E1">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Moccasin">Moccasin</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFE4B5">#FFE4B5</a></td>
									<td bgcolor="#FFE4B5">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=NavajoWhite">NavajoWhite</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFDEAD">#FFDEAD</a></td>
									<td bgcolor="#FFDEAD">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Navy">Navy</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=000080">#000080</a></td>
									<td bgcolor="#000080">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=OldLace">OldLace</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FDF5E6">#FDF5E6</a></td>
									<td bgcolor="#FDF5E6">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Olive">Olive</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=808000">#808000</a></td>
									<td bgcolor="#808000">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=OliveDrab">OliveDrab</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=6B8E23">#6B8E23</a></td>
									<td bgcolor="#6B8E23">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Orange">Orange</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFA500">#FFA500</a></td>
									<td bgcolor="#FFA500">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=OrangeRed">OrangeRed</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FF4500">#FF4500</a></td>
									<td bgcolor="#FF4500">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Orchid">Orchid</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=DA70D6">#DA70D6</a></td>
									<td bgcolor="#DA70D6">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=PaleGoldenRod">PaleGoldenRod</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=EEE8AA">#EEE8AA</a></td>
									<td bgcolor="#EEE8AA">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=PaleGreen">PaleGreen</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=98FB98">#98FB98</a></td>
									<td bgcolor="#98FB98">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=PaleTurquoise">PaleTurquoise</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=AFEEEE">#AFEEEE</a></td>
									<td bgcolor="#AFEEEE">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=PaleVioletRed">PaleVioletRed</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=DB7093">#DB7093</a></td>
									<td bgcolor="#DB7093">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=PapayaWhip">PapayaWhip</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFEFD5">#FFEFD5</a></td>
									<td bgcolor="#FFEFD5">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=PeachPuff">PeachPuff</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFDAB9">#FFDAB9</a></td>
									<td bgcolor="#FFDAB9">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Peru">Peru</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=CD853F">#CD853F</a></td>
									<td bgcolor="#CD853F">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Pink">Pink</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFC0CB">#FFC0CB</a></td>
									<td bgcolor="#FFC0CB">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Plum">Plum</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=DDA0DD">#DDA0DD</a></td>
									<td bgcolor="#DDA0DD">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=PowderBlue">PowderBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=B0E0E6">#B0E0E6</a></td>
									<td bgcolor="#B0E0E6">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Purple">Purple</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=800080">#800080</a></td>
									<td bgcolor="#800080">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Red">Red</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FF0000">#FF0000</a></td>
									<td bgcolor="#FF0000">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=RosyBrown">RosyBrown</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=BC8F8F">#BC8F8F</a></td>
									<td bgcolor="#BC8F8F">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=RoyalBlue">RoyalBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=4169E1">#4169E1</a></td>
									<td bgcolor="#4169E1">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=SaddleBrown">SaddleBrown</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=8B4513">#8B4513</a></td>
									<td bgcolor="#8B4513">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Salmon">Salmon</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FA8072">#FA8072</a></td>
									<td bgcolor="#FA8072">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=SandyBrown">SandyBrown</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=F4A460">#F4A460</a></td>
									<td bgcolor="#F4A460">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=SeaGreen">SeaGreen</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=2E8B57">#2E8B57</a></td>
									<td bgcolor="#2E8B57">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=SeaShell">SeaShell</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFF5EE">#FFF5EE</a></td>
									<td bgcolor="#FFF5EE">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Sienna">Sienna</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=A0522D">#A0522D</a></td>
									<td bgcolor="#A0522D">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Silver">Silver</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=C0C0C0">#C0C0C0</a></td>
									<td bgcolor="#C0C0C0">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=SkyBlue">SkyBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=87CEEB">#87CEEB</a></td>
									<td bgcolor="#87CEEB">&nbsp;</td>
								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=SlateBlue">SlateBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=6A5ACD">#6A5ACD</a></td>
									<td bgcolor="#6A5ACD">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=SlateGray">SlateGray</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=708090">#708090</a></td>
									<td bgcolor="#708090">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Snow">Snow</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFFAFA">#FFFAFA</a></td>
									<td bgcolor="#FFFAFA">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=SpringGreen">SpringGreen</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=00FF7F">#00FF7F</a></td>
									<td bgcolor="#00FF7F">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=SteelBlue">SteelBlue</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=4682B4">#4682B4</a></td>
									<td bgcolor="#4682B4">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Tan">Tan</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=D2B48C">#D2B48C</a></td>
									<td bgcolor="#D2B48C">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Teal">Teal</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=008080">#008080</a></td>
									<td bgcolor="#008080">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Thistle">Thistle</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=D8BFD8">#D8BFD8</a></td>
									<td bgcolor="#D8BFD8">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Tomato">Tomato</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FF6347">#FF6347</a></td>
									<td bgcolor="#FF6347">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Turquoise">Turquoise</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=40E0D0">#40E0D0</a></td>
									<td bgcolor="#40E0D0">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Violet">Violet</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=EE82EE">#EE82EE</a></td>
									<td bgcolor="#EE82EE">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Wheat">Wheat</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=F5DEB3">#F5DEB3</a></td>
									<td bgcolor="#F5DEB3">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=White">White</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFFFFF">#FFFFFF</a></td>
									<td bgcolor="#FFFFFF">&nbsp;</td>


								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=WhiteSmoke">WhiteSmoke</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=F5F5F5">#F5F5F5</a></td>
									<td bgcolor="#F5F5F5">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=Yellow">Yellow</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=FFFF00">#FFFF00</a></td>
									<td bgcolor="#FFFF00">&nbsp;</td>

								</tr>


								<tr>
									<td align="left"><a target="_blank"
											href="/try/color.php?color=YellowGreen">YellowGreen</a>&nbsp;</td>
									<td align="left"><a target="_blank"
											href="/try/color.php?hex=9ACD32">#9ACD32</a></td>
									<td bgcolor="#9ACD32">&nbsp;</td>

								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-color-getter" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">拾色器</h3>
					</div>
					<div class="panel-body">
						<p>使用 HTML5 拾色器</p>
						<div class="form-group">
							<input type="color" class="form-control">
						</div>

						<p>
							<a href="color.html" target="_blank">网上收集的一个配色表</a>
						</p>
					</div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-charset" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">字符集</h3>
					</div>
					<div class="panel-body"></div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-ascii" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">ASCII</h3>
					</div>
					<div class="panel-body"></div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-iso-8859-1" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">ISO-8859-1</h3>
					</div>
					<div class="panel-body"></div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-symbol" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">符号</h3>
					</div>
					<div class="panel-body"></div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-encode" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">URL 编码</h3>
					</div>
					<div class="panel-body"></div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-lang" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">语言代码</h3>
					</div>
					<div class="panel-body"></div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-message" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">消息</h3>
					</div>
					<div class="panel-body"></div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-method" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">方法</h3>
					</div>
					<div class="panel-body"></div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-px-em" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">px / em 换算工具</h3>
					</div>
					<div class="panel-body"></div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-key" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">键盘快捷键</h3>
					</div>
					<div class="panel-body"></div>
				</div>
				<!-- item over -->

				<!-- item start -->
				<a id="html-" class="offset"></a>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title"></h3>
					</div>
					<div class="panel-body"></div>
				</div>
				<!-- item over -->
			</div>
		</div>
	</div>

	<div class="btn-group-vertical bottom-button">
		<a href="#" type="button"
			class="btn btn-default dropdown-toggle dropup" data-toggle="dropup">
			<span class="caret"></span>
		</a>
		<a href="#" type="button"
			class="btn btn-default dropdown-toggle btn-primary"
			data-toggle="dropup"> TOP </a>
	</div>

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="../support/jquery/jquery-3.1.1.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="../support/bootstrap/js/bootstrap.min.js"></script>
	<script src="../support/syntaxhighlighter/scripts/shCore.js"></script>
	<script src="../support/syntaxhighlighter/scripts/shBrushJScript.js"></script>
	<script src="res/menu.js"></script>
	<script src="../commons/js/common.js"></script>
</body>
</html>
