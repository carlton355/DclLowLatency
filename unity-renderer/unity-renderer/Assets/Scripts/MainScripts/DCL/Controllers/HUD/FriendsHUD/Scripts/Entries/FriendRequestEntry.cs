using UnityEngine;
using UnityEngine.UI;

public class FriendRequestEntry : FriendEntryBase
{
    [SerializeField] internal Button acceptButton;
    [SerializeField] internal Button rejectButton;
    [SerializeField] internal Button cancelButton;

    public bool isReceived { get; private set; }

    public event System.Action<FriendRequestEntry> OnAccepted;
    public event System.Action<FriendRequestEntry> OnRejected;
    public event System.Action<FriendRequestEntry> OnCancelled;

    public override void Awake()
    {
        base.Awake();

        acceptButton.onClick.RemoveAllListeners();
        rejectButton.onClick.RemoveAllListeners();
        cancelButton.onClick.RemoveAllListeners();
        acceptButton.onClick.AddListener(() => OnAccepted?.Invoke(this));
        rejectButton.onClick.AddListener(() => OnRejected?.Invoke(this));
        cancelButton.onClick.AddListener(() => OnCancelled?.Invoke(this));
    }

    public void Populate(FriendRequestEntryModel model)
    {
        base.Populate(model);
        SetReceived(model.isReceived);
    }

    public override void Populate(FriendEntryModel model)
    {
        base.Populate(model);

        if (model is FriendRequestEntryModel requestModel)
            SetReceived(requestModel.isReceived);
    }

    private void SetReceived(bool value)
    {
        isReceived = value;

        if (isReceived)
            PopulateReceived();
        else
            PopulateSent();
    }

    private void PopulateReceived()
    {
        isReceived = true;
        cancelButton.gameObject.SetActive(false);
        acceptButton.gameObject.SetActive(true);
        rejectButton.gameObject.SetActive(true);
    }

    private void PopulateSent()
    {
        isReceived = false;
        cancelButton.gameObject.SetActive(true);
        acceptButton.gameObject.SetActive(false);
        rejectButton.gameObject.SetActive(false);
    }
}