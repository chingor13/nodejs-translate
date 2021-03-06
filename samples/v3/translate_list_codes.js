// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(projectId = 'YOUR_PROJECT_ID', location = 'global') {
  // [START translate_v3_list_codes]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'YOUR_PROJECT_ID';
  // const location = 'global';

  // Imports the Google Cloud Translation library
  const {TranslationServiceClient} = require('@google-cloud/translate');

  // Instantiates a client
  const translationClient = new TranslationServiceClient();

  async function listLanguages() {
    // Construct request
    const request = {
      parent: `projects/${projectId}/locations/${location}`,
    };

    try {
      // Run request
      const [response] = await translationClient.getSupportedLanguages(request);

      console.log(`Supported languages:`);
      for (const language of response.languages) {
        console.log(`Language Code: ${language.languageCode}`);
      }
    } catch (error) {
      console.error(error.details);
    }
  }

  listLanguages();
  // [END translate_v3_list_codes]
}

main(...process.argv.slice(2));
