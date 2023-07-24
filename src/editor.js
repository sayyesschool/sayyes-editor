import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold, Italic, Strikethrough, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
// import { FontColor, FontBackgroundColor, FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { GeneralHtmlSupport as HTMLSupport } from '@ckeditor/ckeditor5-html-support';
import { Image, ImageCaption, ImageResize, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { DocumentList, DocumentListProperties } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { Style } from '@ckeditor/ckeditor5-style';
import TableStyleSupport from '@ckeditor/ckeditor5-style/src/integrations/table';
import DocumentListStyleSupport from '@ckeditor/ckeditor5-style/src/integrations/documentlist';
import { Table, TableCellProperties, TableColumnResize, TableProperties, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';

import './editor.css';

export default class extends ClassicEditor {
	static builtinPlugins = [
		Essentials,
		Alignment,
		Autoformat,
		Bold,
		BlockQuote,
		CloudServices,
		DocumentList,
		DocumentListProperties,
		DocumentListStyleSupport,
		// FontColor,
		// FontBackgroundColor,
		// FontSize,
		Heading,
		HorizontalLine,
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
		// List,
		// ListProperties,
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
		TableStyleSupport,
		TextTransformation,
		Underline
	];

	static defaultConfig = {
		language: 'ru', // This value must be kept in sync with the language defined in webpack.config.js.
		alignment: {
			options: [
				{ name: 'left', className: 'text-left' },
				{ name: 'center', className: 'text-center' },
				{ name: 'right', className: 'text-right' },
				{ name: 'justify', className: 'text-justify' }
			]
		},
		list: {
			properties: {
				styles: true,
				startIndex: true,
				reversed: false
			}
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
		table: {
			contentToolbar: [
				'tableRow',
				'tableColumn',
				'mergeTableCells',
				'tableProperties',
				'tableCellProperties'
			]
		},
		toolbar: {
			items: [
				'heading',
				'|',
				'style',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'alignment',
				'removeFormat',
				'|',
				// 'fontColor',
				// 'fontBackgroundColor',
				// 'fontSize',
				// '|',
				// 'outdent',
				// 'indent',
				'|',
				'bulletedList',
				'numberedList',
				'uploadImage',
				'link',
				'blockQuote',
				'horizontalLine',
				'insertTable',
				'mediaEmbed',
				'|',
				'undo',
				'redo'
			]
		}
	};
}