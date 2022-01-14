export default class ImageRemoveEvent {
    constructor(editor, configuration) {
        this.editor = editor;
        this.configuration = configuration;
        this.handleChange = this.handleChange.bind(this);
        this.editor.model.document.on('change:data', this.handleChange);
    }

    handleChange(event) {
        const { callback } = this.configuration;
        const differ = event.source.differ;

        if (differ.isEmpty) return;

        const changes = differ.getChanges({
            includeChangesInGraveyard: true
        });

        if (changes.length === 0) return;

        const removeImageChanges = changes.filter(change => change.type === 'remove' && change.name === 'imageBlock');

        if (removeImageChanges.length === 0) return;

        const removedNodes = changes.filter(change => change.type === 'insert' && change.name === 'imageBlock');
        const removedImagesSrc = [];
        const removedImageNodes = [];

        for (const node of removedNodes) {
            const removedNode = node.position.nodeAfter;
            removedImageNodes.push(removedNode);
            removedImagesSrc.push(removedNode.getAttribute('src'));
        }

        return callback(removedImagesSrc, removedImageNodes);
    }
}