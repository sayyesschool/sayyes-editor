import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageRemoveEvent from './image-remove-event';

export default class ImageRemoveEventCallbackPlugin extends Plugin {
    static get requires() {
        return [Image];
    }

    init() {
        const editor = this.editor;
        const configuration = this.editor.config.get('imageRemoveEvent');

        if (!configuration) {
            console.error('CKEditor5 Image Remove Event Plugin : Configuration is not defined.');
            return;
        }

        if (typeof configuration !== 'object') {
            console.error('CKEditor5 Image Remove Event Plugin: Configuration should be an object.');
            return;
        }

        if (typeof configuration.callback !== 'function') {
            console.error('CKEditor5 Image Remove Event Plugin: Callback property is not valid function.');
            return;
        }

        return new ImageRemoveEvent(editor, configuration);
    }
}