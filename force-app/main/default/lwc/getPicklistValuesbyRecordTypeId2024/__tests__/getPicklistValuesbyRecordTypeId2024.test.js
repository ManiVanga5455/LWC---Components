import { createElement } from 'lwc';
import GetPicklistValuesbyRecordTypeId2024 from 'c/getPicklistValuesbyRecordTypeId2024';

describe('c-get-picklist-valuesby-record-type-id2024', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-get-picklist-valuesby-record-type-id2024', {
            is: GetPicklistValuesbyRecordTypeId2024
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});