using System.Collections;
using System.Collections.Generic;
using System.Linq;
using DCL.Controllers;
using DCL.Helpers;
using DCL.Models;

namespace DCL.Components
{
    public class DCLVideoRealtimeStream : BaseDisposable
    {
        [System.Serializable]
        public class Model : BaseModel
        {
            public string url;
            public string streamId;
            public string provider;

            public override BaseModel GetDataFromJSON(string json) { return Utils.SafeFromJson<Model>(json); }
        }

        public bool isExternalURL { get; private set; }
        public bool isStream { get; private set; }

        public DCLVideoRealtimeStream() { model = new Model(); }

        public override int GetClassId() { return (int) CLASS_ID.VIDEO_REALTIME_STREAM; }

        public override IEnumerator ApplyChanges(BaseModel newModel)
        {
            Model model = (Model)newModel;
            isExternalURL = model.url.StartsWith("http://") || model.url.StartsWith("https://");
            isStream = !new[] { ".mp4", ".ogg", ".mov", ".webm" }.Any(x => model.url.EndsWith(x));
            yield break;
        }

        public string GetUrl()
        {
            Model model = (Model)this.model;

            string contentsUrl = model.url;

            if (!isExternalURL)
            {
                scene.contentProvider.TryGetContentsUrl(model.url, out contentsUrl);
            }

            return contentsUrl;
        }

        public string GetProvider()
        {
            Model model = (Model)this.model;
            return model.provider;
        }

        public string GetStreamId()
        {
            Model model = (Model)this.model;
            return model.streamId;
        }
    }
}