import './bootstrap'
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'
import {
  netlifyCmsRangeControl,
  netlifyCmsRangePreview
} from '../../src/index'

const config = {
    backend: {
        name: "test-repo",
        login: false
    },
    media_folder: "assets",
    collections: [
        {
            name: "test",
            label: "test",
            files: [
				{
					file: "./src/test.yml",
					name: "range_test",
					label: "Range Test",
					fields: [
						{
							name: "test",
							label: "test",
							widget: "string",
						},
						{
							name: "range_widget",
							label: "Range",
							widget: "range",
							max: 50
						}
					]
				}
			]
        }
    ]
};

CMS.registerWidget("range", netlifyCmsRangeControl, netlifyCmsRangePreview);

init({ config });