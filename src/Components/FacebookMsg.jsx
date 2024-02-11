import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
  return (
    <div>
 <FacebookProvider appId={import.meta.env.VITE_Facebook_messenger_appId} chatSupport>
        <CustomChat pageId={import.meta.env.VITE_Facebook_messenger_pageId} minimized={false}/>
      </FacebookProvider>    
    </div>
  )
}

export default FacebookMsg