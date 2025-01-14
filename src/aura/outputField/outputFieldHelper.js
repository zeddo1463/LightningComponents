({
    setFieldMetadataAttributes : function(component, event) {
        var fieldMetadata = component.get('v.fieldMetadata');
        var record = component.get('v.record');

        // Display type
        component.set('v.displayType', fieldMetadata.displayType);

        // Parent record name (used for REFERENCE fields)
        var relationshipName = fieldMetadata.relationshipName;// + '.' + fieldMetadata.relationshipNameField;
        var relationshipNameField = fieldMetadata.relationshipNameField;

        if(record && record.hasOwnProperty(relationshipName)) {
            var parentRecord = record[relationshipName];

            if(parentRecord.hasOwnProperty(relationshipNameField)) {
                var parentRecordName = parentRecord[relationshipNameField];
                component.set('v.parentRecordName', parentRecordName);
            }
        }
    },
    handleFieldValueChanged : function(component, event) {
        var record = component.get('v.record');
        var fieldName = component.get('v.fieldName');

        if(record === null) return;
        if(record.hasOwnProperty(fieldName)) {
            component.set('v.fieldValue', record[fieldName]);
        }
    }
})