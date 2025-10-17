import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold, Italic, Strikethrough, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { GeneralHtmlSupport as HTMLSupport } from '@ckeditor/ckeditor5-html-support';
import { Image, ImageCaption, ImageResize, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List, ListProperties } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { Style } from '@ckeditor/ckeditor5-style';
import ListStyle from '@ckeditor/ckeditor5-style/src/integrations/list';
import TableStyle from '@ckeditor/ckeditor5-style/src/integrations/table';
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
		FontSize,
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
		List,
		ListProperties,
		ListStyle,
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
		TableStyle,
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
		fontSize: {
			options: [
				'small',
				'default'
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
				'fontSize',
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