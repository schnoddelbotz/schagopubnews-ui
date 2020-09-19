import Controller from '@ember/controller';

export default class ArticleNewController extends Controller {
	// FIXME: should be inherited from parent (=article? or even app?)
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
