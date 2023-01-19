import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HTMLSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Style from '@ckeditor/ckeditor5-style/src/style';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';

export default class ClassicEditor extends ClassicEditorBase { }

ClassicEditor.builtinPlugins = [
	Essentials,
	Alignment,
	Autoformat,
	Bold,
	BlockQuote,
	CloudServices,
	FontColor,
	FontBackgroundColor,
	Heading,
	HTMLSupport,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Italic,
	Link,
	List,
	ListProperties,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	SimpleUploadAdapter,
	Strikethrough,
	Style,
	Table,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline
];

ClassicEditor.defaultConfig = {
	language: 'ru', // This value must be kept in sync with the language defined in webpack.config.js.
	toolbar: {
		items: [
			'heading',
			'style',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'|',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'uploadImage',
			'link',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'|',
			'undo',
			'redo',
			'removeFormat'
		]
	},
	list: {
		styles: true
	},
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'toggleImageCaption',
			'imageTextAlternative'
		]
	},
	style: {
		definitions: [
			{
				name: 'Основной цвет',
				element: 'span',
				classes: ['ck-primary-color']
			},
			{
				name: 'Второстепенный цвет',
				element: 'span',
				classes: ['ck-secondary-color']
			},
			{
				name: 'Приглушенный цвет',
				element: 'span',
				classes: ['ck-muted-color']
			}
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties',
			'tableCellProperties'
		]
	}
};