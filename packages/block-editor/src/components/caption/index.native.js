/**
 * External dependencies
 */
import { Platform, View } from 'react-native';

/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

// this platform difference is needed to avoid a regression described here:
// https://github.com/WordPress/gutenberg/pull/18818#issuecomment-559818548
const CAPTION_TAG_NAME = Platform.select( {
	ios: 'p',
	android: '',
} );

const Caption = ( {
	accessibilityLabelCreator,
	accessible,
	inlineToolbar,
	isSelected,
	onBlur,
	onChange,
	onFocus,
	placeholder = __( 'Write caption…' ),
	placeholderTextColor,
	shouldDisplay = true,
	style,
	value,
} ) => (
	<View
		accessibilityLabel={ accessibilityLabelCreator ? accessibilityLabelCreator( value ) : undefined }
		accessibilityRole="button"
		accessible={ accessible }
		style={ { flex: 1, display: shouldDisplay ? 'flex' : 'none' } }
	>
		<RichText
			__unstableMobileNoFocusOnMount
			fontSize={ style && style.fontSize ? style.fontSize : 14 }
			inlineToolbar={ inlineToolbar }
			isSelected={ isSelected }
			onBlur={ onBlur }
			onChange={ onChange }
			placeholder={ placeholder }
			placeholderTextColor={ placeholderTextColor }
			rootTagsToEliminate={ [ 'p' ] }
			style={ style }
			tagName={ CAPTION_TAG_NAME }
			textAlign="center"
			underlineColorAndroid="transparent"
			unstableOnFocus={ onFocus }
			value={ value }
		/>
	</View>
);

export default Caption;
