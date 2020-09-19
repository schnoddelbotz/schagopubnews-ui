import Controller from '@ember/controller';

export default class AboutController extends Controller {
	value = "# Markdown editor demo heading 1\n\nJust to **showcase** *the* tui.editor / ember-tui-editor ...\n\n ## More stuff \n\n here to come.";
	previewStyle = "tab";
	editType = "wysiwyg";
	// https://github.com/evocount/ember-tui-editor
	// https://nhn.github.io/tui.editor/latest/tutorial-example19-customizing-toolbar-buttons
	toolbarItems = [
          'heading',
          'bold',
          'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          'indent',
          'outdent',
          'divider',
          'table',
          'divider',
    ];
}
